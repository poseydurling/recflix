# Backend

Cedric Sirianni

## About

This is the backend for the CS32 Movie Recommender project. It serves movie recommendations using the REST API architecture. There are two available endpoints:

1. `/recommendations` : This endpoint provides a list of ten movie recommendations given three examples provided via a POST request.
2. `/title_to_ids`: This endpoint provides a dictionary containing the title and id of each movie in the dataset.

## Configuration

To run the backend server, use your preferred terminal to `cd` into `/backend` and then create a virtual environment by doing

```console
python3 -m venv env
```

Then, activate the virtual environment via

```console
source env/bin/activate
```

Then, select that environment, `env`, as your Python interpreter.

Finally, just install the dependencies by doing

```console
pip install -r requirements.txt
```

Then, you should be able to run the server with the command

```console
python3 -m src
```

## Customization

As a developer, there are a few ways for you to customize the recommendation algorithm.

1. You can specify which features to consider using the `Feature` enum. The default features used are `CAST`, `DIRECTOR`, `GENRES`, and `KEYWORDS`, but you can select any combination of these by instantiating a `Recommender` object with a custom `set` of `Feature`s. For example,

    ```python
    features = {Feature.CAST, Feature.DIRECTOR}
    recommender = Recommender(features)
    ```

2. You can pre-compute the dataset used to compute the recommendations by calling `construct_dataset` with a filepath. Pass in the the filepath to the `Recommender` contructor and the runtime will improve dramatically in future calls. For example,

    ```python
    features = {Feature.CAST, Feature.DIRECTOR}
    recommender = Recommender(features) # slow
    path = "src/data/tmdb_5000_new.csv"
    construct_dataset(features, path)
    recommender = Recommender(features, path) # very fast
    ```

    > Note that keyword arguments are required when passing in only the filepath.

3. You can choose your own distance metric using the pre-defined functions in `distance_metric.py`. For example, after importing `correlation_distance`,

    ```python
    recommender = Recommender()
    recommender.recommend([10764, 37724, 36557], correlation_distance)
    ```

    The default distance metric is `cosine_distance`.

## Testing

To run the tests, run `pytest` in your terminal while in the `/backend` folder.
