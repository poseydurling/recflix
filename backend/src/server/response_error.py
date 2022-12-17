class ResponseError(Exception):
    """Response exception base class."""

    pass


class BadRequestError(ResponseError):
    """Custom exception class for when the client sends an invalid request."""

    code = 400
    message = "the request was missing a needed field, or the field was ill-formed"
