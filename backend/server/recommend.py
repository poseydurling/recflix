import pandas as pd
import numpy as np
from ast import literal_eval
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from server.feature import Feature


class Recommender:
    def __init__(self, config=None):
        if not config:
            self.movies = pd.read_csv("data/tmdb_5000_default.csv")
        else:
            self.movies = construct_custom_dataset(
                {Feature.CAST, Feature.DIRECTOR, Feature.GENRES}
            )

    def recommend(self, example1: int, example2: int, example3: int) -> list[int]:
        """
        Compute a list of recommendations given three movie examples

        :param example1: the id of the first movie example
        :param example2: the id of the second movie example
        :param example3: the id of the third movie example
        :return: a list of ten movie recommendations in the form of ids
        :raises ValueError: if any of the examples do not exist in the dataset
        """
        # validate inputs by rejecting ids that do not exist in the dataset
        if not all(
            id in self.movies["id"].values for id in [example1, example2, example3]
        ):
            raise ValueError

        # initialize count vectorizer object
        count = CountVectorizer(stop_words="english")

        # create count matrix for the movie corpus
        corpus_count_matrix = count.fit_transform(self.movies["soup"])

        # find the index of each example movie
        # [0] is used to select the first element from the output of index, an Int64Index
        example1_index: int = self.movies.index[self.movies["id"] == example1][0]
        example2_index: int = self.movies.index[self.movies["id"] == example2][0]
        example3_index: int = self.movies.index[self.movies["id"] == example3][0]

        # create an array consisting of the three example movie count rows
        example_frequencies = corpus_count_matrix[
            [example1_index, example2_index, example3_index], :
        ]

        # aggregate example movie rows into count matrix
        example_count_matrix = np.sum(example_frequencies, axis=0)

        # compute the cosine similarity matrix between the two count matrices
        similarity_matrix = cosine_similarity(
            np.asarray(example_count_matrix), corpus_count_matrix
        )

        # convert the similarity matrix into a list of (index, score) tuples
        similarity_scores: list[tuple[int, float]] = list(
            enumerate(similarity_matrix[0])
        )

        # sort the tuples based on similarity score
        similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

        # pick the top 10 movies (excluding the provided examples)
        recommendations = []
        for pair in similarity_scores:
            if len(recommendations) == 10:
                break
            id = self.movies.iloc[pair[0]]["id"]
            # prevent recommending examples provided
            if id in (example1, example2, example3):
                continue
            recommendations.append(int(self.movies.iloc[pair[0]]["id"]))

        return recommendations


def construct_default_dataset():
    """
    Construct the default movie + credits dataset used for computing recommendations. Function
    application only necessary when file does not already exist or changes are being made.

    :return: None
    """
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
    movies["genres"] = movies["genres"].apply(get_names)
    movies["cast"] = movies["cast"].apply(get_names)

    # apply clean_data to the features
    features = ["cast", "director", "genres"]
    for feature in features:
        movies[feature] = movies[feature].apply(clean_data)

    # create a column containing a string with each movie's features
    movies["soup"] = movies.apply(create_soup, axis="columns")

    movies.to_csv("data/tmdb_5000_default.csv", index=False)


def construct_custom_dataset(features: set):
    """
    Construct a custom movie + credits dataset to use for computing recommendations.

    :return: None
    """
    # load the data
    people = pd.read_csv("data/tmdb_5000_credits.csv")
    movies = pd.read_csv("data/tmdb_5000_movies.csv")

    # merge the two datasets
    people.columns = ["id", "tittle", "cast", "crew"]
    movies = movies.merge(people, on="id")

    if Feature.DIRECTOR in features:
        # parse the crew data from stringified list to usable Python objects
        movies["crew"] = movies["crew"].apply(literal_eval)
        # create a new column for directors
        movies["director"] = movies["crew"].apply(get_director)
        movies["director"] = movies["director"].apply(clean_data)
    if Feature.GENRES in features:
        # parse the crew movie from stringified list to usable Python objects
        movies["genres"] = movies["genres"].apply(literal_eval)
        # replace the genre column with usable data
        movies["genres"] = movies["genres"].apply(get_names)
        movies["genres"] = movies["genres"].apply(clean_data)
    if Feature.CAST in features:
        # parse the crew data from stringified list to usable Python objects
        movies["cast"] = movies["cast"].apply(literal_eval)
        # replace the cast column with usable data
        movies["cast"] = movies["cast"].apply(get_names)
        movies["cast"] = movies["cast"].apply(clean_data)

    # create a column containing a string with each movie's features
    movies["soup"] = movies.apply(create_soup, args=(features,), axis="columns")

    return movies


def get_director(cell):
    """Gets the director's name from the crew feature if it exists"""
    for person in cell:
        if person["job"] == "Director":
            return person["name"]
    return np.nan


def get_names(cell) -> list:
    """Returns a list of the top three names in a cell or the entire list; whichever is more"""
    if isinstance(cell, list):
        names = [item["name"] for item in cell]
        # return the top three items in the list if possible
        if len(names) > 3:
            names = names[:3]
        return names
    # return empty list in case of missing/malformed data
    return []


def clean_data(cell):
    """Converts all strings to lower case with no spaces"""
    if isinstance(cell, list):
        return [str.lower(item.replace(" ", "")) for item in cell]
    elif isinstance(cell, str):
        return str.lower(cell.replace(" ", ""))
    else:
        return ""


def create_soup(row, features) -> str:
    """Compiles the cast, director, and genres features into a string for the provided row"""
    soup = ""
    if Feature.CAST in features:
        soup += " ".join(row["cast"]) + " "
    if Feature.DIRECTOR in features:
        soup += row["director"] + " "
    if Feature.GENRES in features:
        soup += " ".join(row["genres"])
    return soup.strip()


if __name__ == "__main__":
    construct_default_dataset()
