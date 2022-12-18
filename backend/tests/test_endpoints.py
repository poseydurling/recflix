import pytest
from src.server.app import app


@pytest.fixture
def client():
    app.testing = True
    client = app.test_client()
    return client


def test_titles_to_ids(client):
    """Tests the /titles_to_ids endpoint in the API.

    :return: None
    """
    response = client.get("http://127.0.0.1:5000/titles_to_ids/")
    for title, movie_id in response.json["data"].items():
        # check that each movie title is a str
        assert type(title) == str
        # check that each movie id is an int
        assert type(movie_id) == int
        # check that each movie id is within the range of possible ids
        assert 5 <= movie_id <= 459488


def test_get_recommendations(client):
    """Tests the /recommendations endpoint in the API.

    :return: None
    """
    response = client.post(
        "http://127.0.0.1:5000/recommendations/",
        json={"example1": 100, "example2": 200, "example3": 302},
    )
    assert response.json["status"] == "success"
    data: list[int] = response.json["data"]
    # check that the list contains ten recommendations
    assert len(data) == 10
    for movie_id in data:
        # check that each movie id is an int
        assert type(movie_id) == int
        # check that each movie id is within the range of possible movie ids
        assert 5 <= movie_id <= 459488

    # bad request from missing data
    response = client.post(
        "http://127.0.0.1:5000/recommendations/",
        json={"example1": 100, "example2": 200},
    )
    assert response.json["status"] == "error"
    assert response.json["code"] == 400

    # bad request from invalid movie ids
    response = client.post(
        "http://127.0.0.1:5000/recommendations/",
        json={"example1": -1, "example2": -2, "example3": -3},
    )
    assert response.json["status"] == "error"
    assert response.json["code"] == 400

    # bad request from invalid key type
    response = client.post(
        "http://127.0.0.1:5000/recommendations/",
        json={0: 100, 1: 200, 2: 300},
    )
    assert response.json["status"] == "error"
    assert response.json["code"] == 400

    # bad request from invalid value type
    response = client.post(
        "http://127.0.0.1:5000/recommendations/",
        json={"example1": "100", "example2": "200", "example3": "300"},
    )
    assert response.json["status"] == "error"
    assert response.json["code"] == 400
