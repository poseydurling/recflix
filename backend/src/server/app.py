import logging
from flask import Flask, request
from flask_cors import CORS
from csv import DictReader
from src.server.response_error import ResponseError, BadRequestError
from src.recommender.recommender import Recommender

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app)


# handlers
# response formatting reference: https://github.com/omniti-labs/jsend
@app.errorhandler(ResponseError)
def handle_exception(err):
    """Returns a JSON when ResponseError or its children are raised"""
    response = {"status": "error", "message": err.message, "code": err.code}
    return response, err.code


@app.route("/recommendations/", methods=["POST"])
def get_recommendations():
    """
    Returns a JSON  containing a list of movie recommendations given three
    examples
    """
    # expect POST request content type to be application/json
    example1: int = request.json.get("example1")
    example2: int = request.json.get("example2")
    example3: int = request.json.get("example3")
    # raise error if one or more examples are null
    if not example1 or not example2 or not example3:
        raise BadRequestError
    app.logger.info(f"Example 1: {example1}")
    app.logger.info(f"Example 2: {example2}")
    app.logger.info(f"Example 3: {example3}")
    recommender = Recommender()
    recommendations = recommender.recommend(example1, example2, example3)
    return {"status": "success", "data": recommendations}


@app.route("/titles_to_ids/", methods=["GET"])
def get_titles_to_ids():
    """Returns a JSON containing every movie title and its corresponding id"""
    titles_to_ids: dict[str, int] = {}
    with open("src/data/tmdb_5000_movies.csv") as csv:
        reader = DictReader(csv)
        for row in reader:
            title: str = row["original_title"]
            id: int = int(row["id"])
            titles_to_ids[title] = id
    return {"status": "success", "data": titles_to_ids}


if __name__ == "__main__":
    app.run()
