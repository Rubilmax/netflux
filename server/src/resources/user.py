"""
Define the REST verbs relative to the users
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import UserRepository
from util import parse_params


class UserResource(Resource):
    """ Verbs relative to the users """

    @staticmethod
    @swag_from("../swagger/user/GET.yml")
    def get(user_id):
        """ Return an user key information based on his id """
        user = UserRepository.get_from_id(user_id=user_id)
        return jsonify({"user": user.json})

    @staticmethod
    @parse_params(
        Argument("last_name", location="json", required=True, help="The last name of the user."),
        Argument("first_name", location="json", required=True, help="The first name of the user."),
        Argument("email", location="json", required=True, help="The email of the user."),
        Argument("age", location="json", required=True, help="The age of the user."),
        Argument("gender", location="json", required=True, help="The gender of the user.")
    )
    @swag_from("../swagger/user/PUT.yml")
    def put(user_id, last_name, first_name, email, age, gender):
        """ Update an user based on the sent information """
        repository = UserRepository()
        user = repository.update(user_id=user_id, last_name=last_name, first_name=first_name, email=email, age=age, gender=gender)
        return jsonify({"user": user.json})

class UsersResource(Resource):

    @staticmethod
    @swag_from("../swagger/user/GET_ALL.yml")
    def get():
        """ Return an user key information based on his id """
        users = [user.json for user in UserRepository.get_all()]
        average_age = round(sum(user["age"] for user in users)/len(users)) if len(users) > 0 else 0
        return jsonify({"users": users, "average_age": average_age})

class UserCreateResource(Resource):

    @staticmethod
    @parse_params(
        Argument("last_name", location="json", required=True, help="The last name of the user."),
        Argument("first_name", location="json", required=True, help="The first name of the user."),
        Argument("email", location="json", required=True, help="The email of the user."),
        Argument("age", location="json", required=True, help="The age of the user."),
        Argument("gender", location="json", required=True, help="The gender of the user.")
    )
    @swag_from("../swagger/user/POST.yml")
    def post(last_name, first_name, email, age, gender):
        """ Create an user based on the sent information """
        user = UserRepository.create(last_name=last_name, first_name=first_name, email=email, age=age, gender=gender)
        return jsonify({"user": user.json})

class UserLoginResource(Resource):

    @staticmethod
    @parse_params(
        Argument("email", location="json", required=True, help="The email of the user.")
    )
    @swag_from("../swagger/user/LOGIN.yml")
    def post(email):
        user = UserRepository.get_from_email(email=email)
        return jsonify({ "user": user.json })