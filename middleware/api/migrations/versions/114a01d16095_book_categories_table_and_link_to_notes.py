"""Book categories table and link to notes

Revision ID: 114a01d16095
Revises: 5ce6dce4ddd4
Create Date: 2019-10-02 08:11:31.203819

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '114a01d16095'
down_revision = '5ce6dce4ddd4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('book_category',
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('name')
    )
    op.create_index(op.f('ix_book_category_name'), 'book_category', ['name'], unique=True)
    op.create_table('book_categories',
    sa.Column('bookcategory_name', sa.String(), nullable=False),
    sa.Column('booknote_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['bookcategory_name'], ['book_category.name'], ),
    sa.ForeignKeyConstraint(['booknote_id'], ['book_note.id'], ),
    sa.PrimaryKeyConstraint('bookcategory_name', 'booknote_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('book_categories')
    op.drop_index(op.f('ix_book_category_name'), table_name='book_category')
    op.drop_table('book_category')
    # ### end Alembic commands ###