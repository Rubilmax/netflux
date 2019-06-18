"""
Defines the blueprint for the movies
"""
from flask import Blueprint
from flask_restful import Api

from resources import UserResource

MOVIE_BLUEPRINT = Blueprint("movie", __name__)
Api(MOVIE_BLUEPRINT).add_resource(
    MovieResource, "/movie/<string:id>"
)
