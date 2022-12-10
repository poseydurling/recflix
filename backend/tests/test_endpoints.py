import pytest
from server.app import app


@pytest.fixture
def client():
    app.testing = True
    client = app.test_client()
    return client


def test_titles_to_ids(client):
    """Tests the /titles_to_ids endpoint in the API"""
    response = client.get("http://127.0.0.1:5000/titles_to_ids/")
    for title, id in response.json["data"].items():
        # check that each movie title is a str
        assert type(title) == str
        # check that each movie id is an int
        assert type(id) == int
        # check that each movie id is within the range of possible ids
        assert 5 <= id <= 459488


def test_get_recommendations(client):
    """Tests the /recommendations endpoint in the API"""
    response = client.post(
        "http://127.0.0.1:5000/recommendations/",
        json={"example1": 100, "example2": 200, "example3": 302},
    )
    assert response.json["status"] == "success"
    data: list[int] = response.json["data"]
    # check that the list contains ten recommendations
    assert len(data) == 10
    for id in data:
        # check that each movie id is an int
        assert type(id) == int
        # check that each movie id is within the range of possible movie ids
        assert 5 <= id <= 459488

    # bad request
    response = client.post(
        "http://127.0.0.1:5000/recommendations/",
        json={"example1": 100, "example2": 200},
    )
    assert response.json["status"] == "error"
    assert response.json["code"] == 400
