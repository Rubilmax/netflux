"""
Define the REST verbs relative to the movies
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import MovieRepository
from resources import MovieMeanResource
from util import parse_params

import json

class MovieResource(Resource):
    """ Verbs relative to the movies """

    @staticmethod
    @swag_from("../swagger/movie/GET.yml")
    def get(movie_id):
        """ Return a movie key information based on its id """
        movie = MovieRepository.get(movie_id=movie_id)
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("release_year", location="json", required=True, help="The release year of the movie.")
    )
    @swag_from("../swagger/movie/PUT.yml")
    def put(movie_id, title, author, release_year):
        """ Update a movie based on the sent information """
        repository = MovieRepository()
        movie = repository.update(movie_id=movie_id, title=title, author=author, release_year=release_year)
        return jsonify({"movie": movie.json})

class MoviesResource(Resource):

    @staticmethod
    @swag_from("../swagger/movie/GET_ALL.yml")
    def get():
        """ Return all movies in database """
        movies = [movie.json for movie in MovieRepository.get_all()]
        for movie in movies:
            movie["average_mark"] = MovieMeanResource.get(movie["movie_id"]).json["average_mark"]
        sorted_movies = sorted(movies, key = lambda movie: movie["average_mark"], reverse = True)
        return jsonify({"movies": sorted_movies})

class MovieCreateResource(Resource):

    @staticmethod
    @parse_params(
        Argument("title", location="json", required=True, help="The title of the movie."),
        Argument("author", location="json", required=True, help="The author of the movie."),
        Argument("release_year", location="json", required=True, help="The release year of the movie.")
    )
    @swag_from("../swagger/movie/POST.yml")
    def post(title, author, release_year):
        """ Create a movie based on the sent information """
        movie = MovieRepository.create(title=title, author=author, release_year=release_year)
        return jsonify({"movie": movie.json})
