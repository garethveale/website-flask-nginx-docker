from api import db
from datetime import datetime

categories = db.Table('categories',
    db.Column('category_name', db.String, db.ForeignKey('category.name'),
        primary_key=True),
    db.Column('post_id', db.Integer, db.ForeignKey('post.id'),
        primary_key=True),
)

book_categories = db.Table('book_categories',
    db.Column('bookcategory_name',
        db.String,
        db.ForeignKey('book_category.name'),
        primary_key=True),
    db.Column('booknote_id', db.Integer, db.ForeignKey('book_note.id'),
        primary_key=True),
)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), index=True, unique=True)
    body = db.Column(db.String(140))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    categories = db.relationship('Category',
        secondary=categories,
        lazy='subquery',
        backref=db.backref('posts', lazy=True))
    slug = db.Column(db.String(64), unique=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __repr__(self):
        return '<Post {}>'.format(self.title)


class Category(db.Model):
    name = db.Column(db.String(20), primary_key=True, index=True, unique=True)

    def __repr__(self):
        return '<Category {}>'.format(self.name)


class BookNote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), index=True, unique=True)
    author = db.Column(db.String(64), index=True)
    body = db.Column(db.String(140))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    book_categories = db.relationship('BookCategory',
        secondary=book_categories,
        lazy='subquery',
        backref=db.backref('booknotes', lazy=True))
    slug = db.Column(db.String(64), unique=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __repr__(self):
        return '<BookNote {}>'.format(self.title)


class BookCategory(db.Model):
    name = db.Column(db.String(20), primary_key=True, index=True, unique=True)

    def __repr__(self):
        return '<BookCategory {}>'.format(self.name)
