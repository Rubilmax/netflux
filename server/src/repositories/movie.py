""" Defines the Movie repository """

from models import Movie
import uuid


class MovieRepository:
    """ The repository for the movie model """

    @staticmethod
    def get(movie_id):
        """ Query a movie by id """
        return Movie.query.filter_by(movie_id=movie_id).first()

    @staticmethod
    def get_all():
        """ Query all saved movies """
        return Movie.query.filter_by()

    def update(self, movie_id, title, author, release_year):
        """ Update a movie's release year """
        movie = self.get(movie_id)
        movie.title = title
        movie.author = author
        movie.release_year = release_year

        return movie.save()

    @staticmethod
    def create(title, author, release_year):
        """ Create a new movie """
        movie = Movie(movie_id=str(uuid.uuid4()), title=title, author=author, release_year=release_year)

        return movie.save()
