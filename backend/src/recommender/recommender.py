import pandas as pd
import numpy as np
from ast import literal_eval
from sklearn.feature_extraction.text import CountVectorizer
from src.recommender.feature import Feature
from src.recommender.distance_metric import cosine_distance
from src.recommender.distance_metric import correlation_distance


class Recommender:
    def __init__(self, features: set[Feature] = None, path: str = None):
        """Constructor for the Recommender class.

        :param features: a set of features that will be considered in the recommendation algorithm
        :param path: the filepath to read the dataframe data from
        """
        if path:
            self.movies = pd.read_csv(path)
        elif features:
            self.movies = construct_dataset(features)
        else:
            self.movies = pd.read_csv("src/data/tmdb_5000_default.csv")

    def recommend(
        self, examples: list[int], distance_metric=cosine_distance
    ) -> list[int]:
        """Compute a list of recommendations given three movie examples.

        :param examples: a list of movie id examples
        :param distance_metric: the function to compute the distance between the examples and each movie in the corpus
        :return: a list of ten movie recommendations in the form of ids
        :raises ValueError: if any of the examples do not exist in the dataset
        """
        # validate inputs by rejecting ids that do not exist in the dataset
        if not all(movie_id in self.movies["id"].values for movie_id in examples):
            raise ValueError

        # initialize count vectorizer object
        count = CountVectorizer(stop_words="english")

        # create count matrix for the movie corpus
        corpus_count_matrix = count.fit_transform(self.movies["soup"])

        # find the index of each example movie
        # [0] is used to select the first element from the output of index, an Int64Index
        example_indices = []
        for example in examples:
            index: int = self.movies.index[self.movies["id"] == example][0]
            example_indices.append(index)

        # create an array consisting of the three example movie count rows
        example_frequencies = corpus_count_matrix[example_indices, :]

        # aggregate example movie rows into count matrix
        example_count_matrix = np.sum(example_frequencies, axis=0)

        # compute the distance matrix between the two count matrices
        distance_matrix = distance_metric(
            np.asarray(example_count_matrix),
            # convert sparse matrix to dense matrix for compatibility with all metrics
            np.asarray(corpus_count_matrix.todense()),
        )

        # convert the distance matrix into a list of (index, score) tuples
        distance_scores: list[tuple[int, float]] = list(enumerate(distance_matrix[0]))

        # sort the tuples in ascending order based on distance score
        # smaller distance means more similar
        distance_scores = sorted(distance_scores, key=lambda x: x[1])

        # pick the top 10 movies (excluding the provided examples)
        recommendations = []
        for pair in distance_scores:
            if len(recommendations) == 10:
                break
            movie_id = self.movies.iloc[pair[0]]["id"]
            # prevent recommending examples provided
            if movie_id in examples:
                continue
            recommendations.append(int(movie_id))

        return recommendations


def construct_dataset(features: set[Feature] = None, path: str = None):
    """Construct a movie + credits dataset to use for computing
    recommendations. Optionally write the dataframe to a csv at the provided
    path.

    :param features: the set of features to be included in the dataset, defaults to None
    :param path: the filepath to write the dataframe data to
    :return: a dataframe with the movie and credits data merged and a soup column for recommendation
    """
    # set default features
    if features is None:
        features = {Feature.CAST, Feature.DIRECTOR, Feature.GENRES, Feature.KEYWORDS}

    # load the data
    people = pd.read_csv("src/data/tmdb_5000_credits.csv")
    movies = pd.read_csv("src/data/tmdb_5000_movies.csv")

    # merge the two datasets
    people.columns = ["id", "tittle", "cast", "crew"]
    movies = movies.merge(people, on="id")

    # parse provided features into usable data for the recommend method
    if Feature.DIRECTOR in features:
        movies["crew"] = movies["crew"].apply(literal_eval)
        # create a new column for directors
        movies["director"] = movies["crew"].apply(get_director)
        movies["director"] = movies["director"].apply(clean_data)
    if Feature.GENRES in features:
        movies["genres"] = movies["genres"].apply(literal_eval)
        movies["genres"] = movies["genres"].apply(get_names)
        movies["genres"] = movies["genres"].apply(clean_data)
    if Feature.CAST in features:
        movies["cast"] = movies["cast"].apply(literal_eval)
        movies["cast"] = movies["cast"].apply(get_names)
        movies["cast"] = movies["cast"].apply(clean_data)
    if Feature.KEYWORDS in features:
        movies["keywords"] = movies["keywords"].apply(literal_eval)
        movies["keywords"] = movies["keywords"].apply(get_names)
        movies["keywords"] = movies["keywords"].apply(clean_data)

    # create a column containing a string with each movie's features
    movies["soup"] = movies.apply(create_soup, args=(features,), axis="columns")

    # write dataframe to csv at path provided
    if path:
        movies.to_csv(path, index=False)

    return movies


def get_director(cell):
    """Get the director's name from the crew data.

    :param cell: a list containing crew data in dictionary format
    :return: the name of the director if it exists, np.nan otherwise
    """
    for person in cell:
        if person["job"] == "Director":
            return person["name"]
    return np.nan


def get_names(cell) -> list:
    """Return a list of the top three names in a cell or the entire list;
    whichever is more.

    :param cell: a list containing data in dictionary format
    :return: a list of between zero and three names
    """
    if isinstance(cell, list):
        names = [item["name"] for item in cell]
        # return the top three items in the list if possible
        if len(names) > 3:
            names = names[:3]
        return names
    # return empty list if there is missing/malformed data
    return []


def clean_data(cell):
    """Convert all strings to lower case with no spaces.

    :param cell:  a list or string representing a feature
    :return: the cell with every space removed and every letter lowercase
    """
    if isinstance(cell, list):
        return [str.lower(item.replace(" ", "")) for item in cell]
    elif isinstance(cell, str):
        return str.lower(cell.replace(" ", ""))
    else:
        return ""


def create_soup(row, features: set[Feature]) -> str:
    """Compile the provided features into a string for the provided row.

    :param row: a Series containing feature data for some movie
    :param features: the set of features to be included in the soup
    :return: a string containing the keywords of the provided features
    """
    soup = ""
    if Feature.CAST in features:
        soup += " ".join(row["cast"])
    if Feature.DIRECTOR in features:
        soup += " " + row["director"]
    if Feature.GENRES in features:
        soup += " " + " ".join(row["genres"])
    if Feature.KEYWORDS in features:
        soup += " " + " ".join(row["keywords"])
    return soup


if __name__ == "__main__":
    # path = "src/data/tmdb_5000_new.csv"
    # construct_dataset(path=path)
    # recommender = Recommender(path=path)
    recommender = Recommender()
    print(recommender.recommend([10764, 37724, 36557], correlation_distance))
