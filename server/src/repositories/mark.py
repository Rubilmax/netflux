""" Defines the Mark repository """

from models import Mark


class MarkRepository:
    """ The repository for the mark model """

    @staticmethod
    def get(movie_id, user_id):
        """ Query a mark by movie_id and user_id """
        return Mark.query.filter_by(movie_id=movie_id, user_id=user_id).one()

    def update(self, movie_id, user_id, note):
        """ Update a mark """
        mark = self.get(movie_id, user_id)
        mark.note = note

        return mark.save()

    @staticmethod
    def create(movie_id,user_id,note):
        """ Create a new mark """
        mark = Mark(movie_id=movie_id, user_id=user_id, note=note)

        return mark.save()


    @staticmethod
    def get_all():
        return Mark.query.filter_by()


