import pytest
import pandas as pd
import numpy as np
from src.recommender.feature import Feature
from src.recommender.recommender import (
    Recommender,
    construct_dataset,
    get_director,
    get_names,
    clean_data,
    create_soup,
)
from src.recommender.distance_metric import (
    cosine_distance,
    correlation_distance,
    euclidean_distance,
)


def test_recommend():
    """Test the recommend function.

    :return: None
    """
    recommender = Recommender()
    recommendations = recommender.recommend([100, 200, 302])
    assert len(recommendations) == 10
    for movie_id in recommendations:
        # check that each movie id is an int
        assert type(movie_id) == int
        # check that each movie id is within the range of possible movie ids
        assert 5 <= movie_id <= 459488

    # check that invalid movie ids raise exception
    with pytest.raises(ValueError):
        recommender.recommend([-1, 100, 100])
        recommender.recommend([100, -1, 100])
        recommender.recommend([100, 100, -1])

    # check that create_default_dataset and create_custom_dataset produce the same
    # recommendations when using the same features
    features = {Feature.CAST, Feature.DIRECTOR, Feature.GENRES, Feature.KEYWORDS}
    recommender_custom = Recommender(features)
    recommendations_custom = recommender_custom.recommend([100, 200, 302])
    assert recommendations == recommendations_custom

    # check that different distance metrics do not cause error
    assert recommender.recommend([100, 200, 302], distance_metric=cosine_distance)
    assert recommender.recommend([100, 200, 302], distance_metric=correlation_distance)
    assert recommender.recommend([100, 200, 302], distance_metric=euclidean_distance)

    # check that custom filepaths are supported
    path = "src/data/tmdb_5000_test.csv"
    construct_dataset(path="src/data/tmdb_5000_test.csv")
    recommender_path = Recommender(path=path)
    recommendations_path = recommender_path.recommend([100, 200, 302])
    assert recommendations_path == recommendations


def test_get_director():
    """Test the get_director function.

    :return: None
    """
    cast = [
        {
            "credit_id": "52fe48009251416c750ac9c3",
            "department": "Directing",
            "gender": 2,
            "id": 2710,
            "job": "Director",
            "name": "James Cameron",
        }
    ]
    # director exists
    assert get_director(cast) == "James Cameron"
    cast = [
        {
            "credit_id": "52fe48009251416c750ac9c3",
            "department": "Directing",
            "gender": 2,
            "id": 2710,
            "job": "Actor",
            "name": "James Cameron",
        }
    ]
    # director does not exist
    assert get_director(cast) is np.nan


def test_get_names():
    """Test the get_names function.

    :return: None
    """
    # non-list input
    assert get_names("Animals as Leaders") == []
    # empty list
    assert get_names([]) == []
    # non-empty list; size < 3
    cast = [
        {
            "credit_id": "52fe48009251416c750ac9c3",
            "department": "Directing",
            "gender": 2,
            "id": 2710,
            "job": "Director",
            "name": "James Cameron",
        },
        {
            "credit_id": "52fe48009251416c750ac9c3",
            "department": "Directing",
            "gender": 2,
            "id": 2710,
            "job": "Cinematographer",
            "name": "Roger Deakins",
        },
    ]
    assert get_names(cast) == ["James Cameron", "Roger Deakins"]
    # non-empty list; size >= 3
    cast = [
        {
            "cast_id": 242,
            "character": "Jake Sully",
            "credit_id": "5602a8a7c3a3685532001c9a",
            "gender": 2,
            "id": 65731,
            "name": "Sam Worthington",
            "order": 0,
        },
        {
            "cast_id": 3,
            "character": "Neytiri",
            "credit_id": "52fe48009251416c750ac9cb",
            "gender": 1,
            "id": 8691,
            "name": "Zoe Saldana",
            "order": 1,
        },
        {
            "cast_id": 25,
            "character": "Dr. Grace Augustine",
            "credit_id": "52fe48009251416c750aca39",
            "gender": 1,
            "id": 10205,
            "name": "Sigourney Weaver",
            "order": 2,
        },
        {
            "cast_id": 4,
            "character": "Col. Quaritch",
            "credit_id": "52fe48009251416c750ac9cf",
            "gender": 2,
            "id": 32747,
            "name": "Stephen Lang",
            "order": 3,
        },
    ]
    assert get_names(cast) == ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]


def test_clean_data():
    """Test the clean_data function which converts all strings to lower case
    with no spaces.

    :return: None
    """
    # empty list
    assert clean_data([]) == []
    # single element list; no changes needed
    assert clean_data(["tomato"]) == ["tomato"]
    # multiple element list; remove spaces and convert uppercase to lower case
    assert clean_data(["RED ORANGE", "Raw Tomato"]) == ["redorange", "rawtomato"]
    # single word; no changes needed
    assert clean_data("dream") == "dream"
    # multiple words; remove spaces and convert uppercase to lower case
    assert clean_data("DREAM THEATER") == "dreamtheater"
    # non-string/list input
    assert clean_data(42) == ""


def test_create_soup():
    """Test the create_soup function which select attributes of a row into a
    string.

    :return: None
    """
    row = pd.Series({"cast": ["a", "b", "c"], "director": "bob", "genres": ["action"]})
    features = {Feature.CAST, Feature.DIRECTOR, Feature.GENRES}
    assert create_soup(row, features) == "a b c bob action"
