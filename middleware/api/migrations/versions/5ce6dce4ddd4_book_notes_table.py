"""Book notes table

Revision ID: 5ce6dce4ddd4
Revises: 4b4cd9a14d0b
Create Date: 2019-10-02 08:10:23.416980

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5ce6dce4ddd4'
down_revision = '4b4cd9a14d0b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('book_note',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=True),
    sa.Column('author', sa.String(length=64), nullable=True),
    sa.Column('body', sa.String(length=140), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.Column('slug', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('slug')
    )
    op.create_index(op.f('ix_book_note_author'), 'book_note', ['author'], unique=False)
    op.create_index(op.f('ix_book_note_timestamp'), 'book_note', ['timestamp'], unique=False)
    op.create_index(op.f('ix_book_note_title'), 'book_note', ['title'], unique=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_book_note_title'), table_name='book_note')
    op.drop_index(op.f('ix_book_note_timestamp'), table_name='book_note')
    op.drop_index(op.f('ix_book_note_author'), table_name='book_note')
    op.drop_table('book_note')
    # ### end Alembic commands ###
