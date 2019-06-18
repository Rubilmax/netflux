"""
Defines the blueprint for the marks
"""
from flask import Blueprint
from flask_restful import Api

from resources import MarkResource

MARK_BLUEPRINT = Blueprint("marks", __name__)
Api(MARK_BLUEPRINT).add_resource(MarkResource, "/mark/<string:movie_id>/<string:user_id>")
