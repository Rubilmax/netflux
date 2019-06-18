"""
Defines the blueprint for the movies
"""
from flask import Blueprint
from flask_restful import Api

from resources import MovieResource, MoviesResource, MovieCreateResource

MOVIE_BLUEPRINT = Blueprint("movie", __name__)
api = Api(MOVIE_BLUEPRINT)
api.add_resource(MovieResource, "/movie/<string:id>")
api.add_resource(MoviesResource, "/movies")
api.add_resource(MovieCreateResource, "/movie/add")
