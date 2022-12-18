from enum import Enum


class Feature(Enum):
    """Enum for the features of the movie dataset."""

    CAST = "cast"
    DIRECTOR = "director"
    GENRES = "genres"
    KEYWORDS = "keywords"
