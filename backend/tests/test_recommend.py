import pytest
from server.recommend import recommend


def test_recommend():
    """Tests the recommend function"""
    recommendations = recommend(100, 200, 302)
    assert len(recommendations) == 10
    for id in recommendations:
        # check that each movie id is an int
        assert type(id) == int
        # check that each movie id is within the range of possible movie ids
        assert 5 <= id <= 459488

    # check that invalid movie ids raise exception
    with pytest.raises(ValueError):
        recommend(-1, 100, 100)
        recommend(100, -1, 100)
        recommend(100, 100, -1)


# TODO: test helper functions
# TODO: update requirements.txt when done
