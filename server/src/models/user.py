"""
Define the User model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class User(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The User model """

    __tablename__ = "user"

    user_id = db.Column(db.String(300), primary_key=True)
    first_name = db.Column(db.String(300), nullable=True)
    last_name = db.Column(db.String(300), nullable=True)
    email = db.Column(db.String(300), nullable=True)
    age = db.Column(db.Integer, nullable=True)
    gender = db.Column(db.String(300), nullable=True)

    def __init__(self, user_id, first_name, last_name, email, age=None, gender=None):
        """ Create a new User """
        self.user_id = user_id
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.gender = gender
