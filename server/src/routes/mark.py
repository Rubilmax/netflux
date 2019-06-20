"""
Defines the blueprint for the marks
"""
from flask import Blueprint
from flask_restful import Api

from resources import MarkResource,MovieMeanResource

MARK_BLUEPRINT = Blueprint("marks", __name__)
api = Api(MARK_BLUEPRINT)
api.add_resource(MarkResource, "/mark/<string:movie_id>/<string:user_id>")
api.add_resource(MovieMeanResource, "/mark/<string:movie_id>")
