# Backend

Cedric Sirianni

## About

This is the backend for the CS32 Movie Recommender project. It serves movie recommendations using the REST API architecture. There are two available endpoints:

1. `/recommendations` : This endpoint provides a list of ten movie recommendations given three examples provided via a POST request.
2. `/title_to_ids`: This endpoint provides a dictionary containing the title and id of each movie in the dataset.

## Configuration

To run the backend server, use your preferred terminal to `cd` into `/backend` and then create a virtual environment by doing

```
python3 -m venv env
```

Then, activate the virtual environment via

```
source env/bin/activate
```

Then, select that environment, `env`, as your Python interpreter.

Finally, just install the dependencies by doing
```
pip install -r requirements.txt
```

Then, you should be able to run the server with the command 
```
python3 -m src
```

## Testing

To run the tests, run `pytest` in your terminal while in the `/backend` folder.