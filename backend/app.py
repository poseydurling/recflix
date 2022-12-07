from flask import Flask, jsonify

app = Flask(__name__)

# errors


class ResponseError(Exception):
    pass


class BadRequestError(ResponseError):
    code = 400
    description = ("the request was missing a needed field, or the field was"
                   " ill-formed")


# handlers


@app.errorhandler(ResponseError)
def handle_exception(err):
    """Return custom JSON when ResponseError or its children are raised"""
    response = {"error": err.description}
    return jsonify(response), err.code

@app.route("/recommendation/", methods=['GET'])
def get_recommendation():
    return jsonify({"movie_id": 671})


@app.route("/titles_to_ids/", methods=['GET'])
def get_titles_to_ids():
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
