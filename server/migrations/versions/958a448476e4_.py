"""empty message

Revision ID: 958a448476e4
Revises: f24691273ca4
Create Date: 2019-06-18 13:48:39.698248

"""

# revision identifiers, used by Alembic.
revision = '958a448476e4'
down_revision = 'f24691273ca4'

from alembic import op
import sqlalchemy as sa


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movies',
    sa.Column('movie_id', sa.String(length=300), nullable=False),
    sa.Column('title', sa.String(length=300), nullable=True),
    sa.Column('author', sa.String(length=300), nullable=True),
    sa.Column('release_year', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('movie_id')
    )
    op.drop_table('movie')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movie',
    sa.Column('id', sa.VARCHAR(length=300), autoincrement=False, nullable=False),
    sa.Column('title', sa.VARCHAR(length=300), autoincrement=False, nullable=True),
    sa.Column('author', sa.VARCHAR(length=300), autoincrement=False, nullable=True),
    sa.Column('release_year', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='movie_pkey')
    )
    op.drop_table('movies')
    # ### end Alembic commands ###
