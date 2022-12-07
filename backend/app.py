from flask import Flask, jsonify, request
import logging

app = Flask(__name__)

logging.basicConfig(level=logging.INFO)

# errors


class ResponseError(Exception):
    """Response exception base class"""
    pass


class BadRequestError(ResponseError):
    """Custom exception class for when the client sends an invalid request"""
    code = 400
    description = ("the request was missing a needed field, or the field was"
                   " ill-formed")


# handlers


@app.errorhandler(ResponseError)
def handle_exception(err):
    """Returns a JSON when ResponseError or its children are raised"""
    response = {"error": err.description}
    return jsonify(response), err.code


@app.route("/recommendations/", methods=['GET'])
def get_recommendations():
    """
    Returns a JSON  containing a list of movie recommendations given three
    examples
    """
    example1 = request.args.get("example1")
    example2 = request.args.get("example2")
    example3 = request.args.get("example3")
    # raise error if one or more examples are null
    if not example1 or not example2 or not example3:
        raise BadRequestError
    app.logger.info(example1)
    app.logger.info(example2)
    app.logger.info(example3)
    return jsonify({"recommendation_ids":
                    [671, 5, 11, 12, 13, 14, 16, 18, 19, 20]})


@app.route("/titles_to_ids/", methods=['GET'])
def get_titles_to_ids():
    """Return JSON containing every movie title and its corresponding id"""
    return jsonify({
        "Avatar": 19995,
        "Pirates of the Caribbean: At World's End": 285,
        "Spectre": 206647,
        "The Dark Knight Rises": 49026,
        "John Carter": 49529,
        "Spider-Man 3": 559,
        "Tangled": 38757,
        "Avengers: Age of Ultron": 99861,
        "Harry Potter and the Half-Blood Prince": 767,
        "Batman v Superman: Dawn of Justice": 209112
        })


if __name__ == "__main__":
    app.run()
