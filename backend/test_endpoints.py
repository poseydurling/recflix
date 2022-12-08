import pytest
from app import app


@pytest.fixture
def client():
    app.testing = True
    client = app.test_client()
    yield client


def test_titles_to_ids(client):
    response = client.get("http://127.0.0.1:5000/titles_to_ids/")
    # check that the json contains ten recommendations
    assert len(response.json) == 10
    for title, id in response.json.items():
        # check that each movie title is a str
        assert type(title) == str
        # check that each id is an int
        assert type(id) == int
        # check that each id is within the range of possible ids
        assert id >= 5 and id <= 459488
