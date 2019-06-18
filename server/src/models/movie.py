"""
Define the Movie model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Movie(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Movie model """

    __tablename__ = "movies"

    movie_id = db.Column(db.String(300), primary_key=True)
    title = db.Column(db.String(300))
    author = db.Column(db.String(300))
    release_year = db.Column(db.Integer)

    def __init__(self, movie_id, title, author, release_year):
        """ Create a new movie """
        self.movie_id = movie_id
        self.title = title
        self.author = author
        self.release_year = release_year
