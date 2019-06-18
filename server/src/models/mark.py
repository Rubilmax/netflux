"""
Define the Mark model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Mark(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Mark model """

    __tablename__ = "mark"

    movie_id = db.Column(db.String(300), primary_key=True)
    user_id = db.Column(db.String(300), primary_key=True)
    note = db.Column(db.Integer, nullable=True)

    def __init__(self, movie_id,user_id, note=None):
        """ Create a new mark"""
        self.movie_id = movie_id
        self.user_id = user_id
        self.note = note
