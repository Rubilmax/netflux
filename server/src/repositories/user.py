""" Defines the User repository """

from models import User

import uuid

class UserRepository:
    """ The repository for the user model """

    @staticmethod
    def get_from_id(user_id):
        """ Query a user by his unique id """
        return User.query.filter_by(user_id=user_id).one()

    @staticmethod
    def get_from_email(email):
        """ Query a user by his email """
        return User.query.filter_by(email=email).one()

    @staticmethod
    def get_all():
        """ Query all saved users """
        return User.query.filter_by()

    def update(self, user_id, last_name=None, first_name=None, email=None, age=None, gender=None):
        """ Update a user's age """
        user = self.get(user_id=user_id)
        if last_name is not None:
            user.last_name = last_name
        if first_name is not None:
            user.first_name = first_name
        if email is not None:
            user.email = email
        if age is not None:
            user.age = age
        if gender is not None:
            user.gender = gender

        return user.save()

    @staticmethod
    def create(last_name, first_name, email, age=None, gender=None):
        """ Create a new user """
        user = User(user_id=str(uuid.uuid4()), last_name=last_name, first_name=first_name, email=email, age=age, gender=gender)

        return user.save()
