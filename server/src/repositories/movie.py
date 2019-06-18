""" Defines the Movie repository """

from models import Movie
import uuid


class MovieRepository:
    """ The repository for the movie model """

    @staticmethod
    def get(id):
        """ Query a movie by id """
        return Movie.query.filter_by(id=id).one()
    
    @staticmethod
    def get(title, author):
        """ Query a movie by title and author """
        return Movie.query.filter_by(title=title, author=author).one()

    def update(self, id, title, author, release_year):
        """ Update a movie's release year """
        movie = self.get(id)
        movie.title = title
        movie.author = author
        movie.release_year = release_year

        return movie.save()

    @staticmethod
    def create(title, author, release_year):
        """ Create a new movie """
        movie = Movie(id=str(uuid.uuid4()), title=title, author=author, release_year=release_year)

        return movie.save()
