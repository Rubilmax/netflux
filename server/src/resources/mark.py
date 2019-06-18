"""
Define the REST verbs relative to the marks
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import MarkRepository
from util import parse_params


class MarkResource(Resource):
    """ Verbs relative to the marks """

    @staticmethod
    @swag_from("../swagger/mark/GET.yml")
    def get(movie_id, user_id):
        """ Return the mark given by user to movie """
        mark = MarkRepository.get(movie_id=movie_id, user_id=user_id)
        return jsonify({"mark": mark.json})

    @staticmethod
    @parse_params(
        Argument("note", location="json", required=True, help="The mark given.")
    )
    @swag_from("../swagger/mark/POST.yml")
    def post(movie_id, user_id, note):
        """ Create a mark based on the sent information """
        mark = MarkRepository.create(movie_id=movie_id, user_id=user_id, note=note)
        return jsonify({"mark": mark.json})

    @staticmethod
    @parse_params(
        Argument("note", location="json", required=True, help="The mark given.")
    )
    @swag_from("../swagger/mark/PUT.yml")
    def put(movie_id, user_id, note):
        """ Update an user based on the sent information """
        repository = MarkRepository()
        mark = repository.update(movie_id=movie_id, user_id=user_id, note=note)
        return jsonify({"mark": mark.json})

class MovieMeanResource(Resource):

    @staticmethod
    @swag_from("../swagger/mark/GET_MEAN.yml")
    def get():
        """ Return the mark given by user to movie """
        marks = MarkRepository.get_all()
        mean = sum([mark.json["note"] for mark in marks])/len(marks) if len(marks) > 0 else 0
        return jsonify({"mean": mean})


