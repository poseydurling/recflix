import pandas as pd
import numpy as np
from ast import literal_eval
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def initialize():
    """Configures the dataframe used to produce recommendations"""
    # load the data
    people = pd.read_csv("data/tmdb_5000_credits.csv")
    movies = pd.read_csv("data/tmdb_5000_movies.csv")

    # merge the two datasets
    people.columns = ["id", "tittle", "cast", "crew"]
    movies = movies.merge(people, on="id")

    # parse the cast, crew, and genre data from stringified lists to usable Python objects
    features = ["cast", "crew", "genres"]
    for feature in features:
        movies[feature] = movies[feature].apply(literal_eval)

    # create a new column for directors
    movies["director"] = movies["crew"].apply(get_director)

    # replace the genre and cast columns with usable data
    movies["genres"] = movies["genres"].apply(get_items)
    movies["cast"] = movies["cast"].apply(get_items)

    # TODO: make this list modular
    # apply clean_data to the features
    features = ["cast", "director", "genres"]
    for feature in features:
        movies[feature] = movies[feature].apply(clean_data)

    # create a column containing a string with each movie's features
    movies["soup"] = movies.apply(create_soup, axis="columns")

    return movies


def get_director(cell):
    """Gets the director's name from the crew feature if it exists"""
    for person in cell:
        if person["job"] == "Director":
            return person["name"]
    return np.nan


def get_items(cell) -> list:
    """Returns a list of the top three items in a cell or entire list; whichever is more"""
    if isinstance(cell, list):
        names = [item["name"] for item in cell]
        # return the top three items in the list if possible
        if len(names) > 3:
            names = names[:3]
        return names
    # return empty list in case of missing/malformed data
    return []


# TODO: type annotate with str | list[str]
def clean_data(cell):
    """Converts all strings to lower case with no spaces"""
    if isinstance(cell, list):
        return [str.lower(item.replace(" ", "")) for item in cell]
    elif isinstance(cell, str):
        return str.lower(cell.replace(" ", ""))
    else:
        return ""


def create_soup(row) -> str:
    """Compiles the cast, director, and genres features into a string for the provided row"""
    return " ".join(row["cast"]) + " " + row["director"] + " " + " ".join(row["genres"])


# compute recommendation
def recommend(example1: int, example2: int, example3: int) -> list[int]:
    # store the dataframe
    movies = initialize()

    # initialize count vectorizer object
    count = CountVectorizer(stop_words="english")

    # create count matrix for the movie corpus
    corpus_count_matrix = count.fit_transform(movies["soup"])

    # find the index of each example movie
    # [0] is used to select the first element from the output of index, a Int64Index
    example1_index: int = movies.index[movies["id"] == example1][0]
    example2_index: int = movies.index[movies["id"] == example2][0]
    example3_index: int = movies.index[movies["id"] == example3][0]

    # create an array consisting of the three example movie count rows
    example_frequencies = corpus_count_matrix[
        [example1_index, example2_index, example3_index], :
    ]

    # aggregate example movie rows into count matrix
    example_count_matrix = np.sum(example_frequencies, axis=0)[0, :]

    # compute the cosine similarity matrix between the two count matrices
    similarity_matrix = cosine_similarity(
        np.asarray(example_count_matrix), corpus_count_matrix
    )

    # convert the similarity matrix into a list of (index, score) tuples
    similarity_scores: list[tuple[int, float]] = list(enumerate(similarity_matrix[0]))

    # sort the tuples based on similarity score
    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

    # pick the top 10 movies (excluding the provided examples)
    recommendations = []
    for pair in similarity_scores:
        if len(recommendations) == 10:
            break
        if pair[0] == example1 or pair[0] == example2 or pair[0] == example3:
            continue
        recommendations.append(pair[0])

    return recommendations


recommend(100, 200, 302)
