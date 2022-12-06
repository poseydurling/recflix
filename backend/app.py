from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/recommendation/", methods=['GET'])
def get_recommendation():
    return jsonify({"movie_id": 671})


@app.route("/movie_titles/", methods=['GET'])
def get_movie_titles():
    return jsonify([
        "Avatar",
        "Pirates of the Caribbean: At World's End",
        "Spectre",
        "The Dark Knight Rises",
        "John Carter",
        "Spider-Man 3",
        "Tangled",
        "Avengers: Age of Ultron",
        "Harry Potter and the Half-Blood Prince",
        "Batman v Superman: Dawn of Justice"
        ])


if __name__ == "__main__":
    app.run()
