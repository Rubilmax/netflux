"""
Define the REST verbs relative to the movies
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import UserRepository
from util import parse_params


class MovieResource(Resource):
    """ Verbs relative to the movies """

    @staticmethod
    @swag_from("../swagger/movie/GET.yml")
    def get(id):
        """ Return an movie key information based on its id """
        movie = MovieRepository.get(id=id)
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("release_year", location="json", required=True, help="The release year of the movie.")
    )
    @swag_from("../swagger/movie/POST.yml")
    def post(title, author, release_year):
        """ Create a movie based on the sent information """
        user = MovieRepository.create(title=title, author=author, release_year=release_year)
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("release_year", location="json", required=True, help="The release year of the movie.")
    )
    @swag_from("../swagger/movie/PUT.yml")
    def put(id, title, author, release_year):
        """ Update a movie based on the sent information """
        repository = MovieRepository()
        user = repository.update(id=id, title=title, author=author, release_year=release_year)
        return jsonify({"movie": movie.json})
