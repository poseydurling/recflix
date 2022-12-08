import pytest
from app import app


@pytest.fixture
def client():
    app.testing = True
    client = app.test_client()
    yield client


def test_titles_to_ids(client):
    response = client.get("http://127.0.0.1:5000/titles_to_ids/")
    for title, id in response.json.items():
        # check that each movie title is a str
        assert type(title) == str
        # check that each movie id is an int
        assert type(id) == int
        # check that each movie id is within the range of possible ids
        assert id >= 5 and id <= 459488


def test_get_recommendations(client):
    response = client.post(
        "http://127.0.0.1:5000/recommendations/",
        json={"example1": 100, "example2": 200, "example3": 302},
    )
    recommendation_ids: list[int] = response.json["recommendation_ids"]
    # check that the list contains ten recommendations
    assert len(recommendation_ids) == 10
    for id in recommendation_ids:
        # check that each movie id is an int
        assert type(id) == int
        # check that each movie id is within the range of possible movie ids
        assert id >= 5 and id <= 459488
