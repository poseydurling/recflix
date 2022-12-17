from sklearn.metrics.pairwise import pairwise_distances


def distance_metric(X, Y, metric):
    pass


def cosine_distance(X, Y):
    return pairwise_distances(X, Y, metric="cosine")


def euclidean_distance(X, Y):
    return pairwise_distances(X, Y, metric="euclidean")


def correlation_distance(X, Y):
    return pairwise_distances(X, Y, metric="correlation")
