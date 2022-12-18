from sklearn.metrics.pairwise import pairwise_distances

# pairwise distances reference: https://scikit-learn.org/0.15/modules/generated/sklearn.metrics.pairwise.pairwise_distances.html
def distance_metric(X, Y):
    """A pseudo-interface for the below distance metric functions.

    :param X: an array of numbers
    :param Y: an array of numbers
    :return: a distance matrix
    """
    pass


def cosine_distance(X, Y):
    """Compute the cosine distance matrix from vector arrays X and Y.

    :param X: an array of numbers
    :param Y: an array of numbers
    :return: a cosine distance matrix
    """
    return pairwise_distances(X, Y, metric="cosine")


def euclidean_distance(X, Y):
    """Compute the euclidean distance matrix from vector arrays X and Y.

    :param X: an array of numbers
    :param Y: an array of numbers
    :return: a euclidean distance matrix
    """
    return pairwise_distances(X, Y, metric="euclidean")


def correlation_distance(X, Y):
    """Compute the (Pearson) correlation distance matrix from vector arrays X
    and Y.

    :param X: an array of numbers
    :param Y: an array of numbers
    :return: a correlation distance matrix
    """
    return pairwise_distances(X, Y, metric="correlation")
