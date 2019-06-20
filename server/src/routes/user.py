"""
Defines the blueprint for the users
"""
from flask import Blueprint
from flask_restful import Api

from resources import UserResource, UsersResource, UserCreateResource, UserLoginResource

USER_BLUEPRINT = Blueprint("users", __name__)
api = Api(USER_BLUEPRINT)
api.add_resource(UserResource, "/user/<string:user_id>")
api.add_resource(UsersResource, "/users")
api.add_resource(UserCreateResource, "/user/add")
api.add_resource(UserLoginResource, "/login")
