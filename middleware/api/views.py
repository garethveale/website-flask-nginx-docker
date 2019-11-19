from api import app
from api.forms import ContactForm
from api.models import Post, BookNote
from api.send_email import send_contact_form
from api.github import git_stats
from flask import jsonify, request, flash


@app.route('/posts')
def posts():
    posts = []
    post_list = Post.query.all()

    for post in post_list:
        categories = [category.name for category in post.categories]
        posts.append({
            'id': post.id,
            'title': post.title,
            'body': post.body,
            'categories': categories,
            'time_posted': post.timestamp
        })
    return jsonify({'posts': posts})


@app.route('/books')
def book_notes():
    book_notes = []
    book_note_list = BookNote.query.all()

    for book_note in book_note_list:
        categories = [category.name for category in book_note.book_categories]
        book_notes.append({
            'title': book_note.title,
            'body': book_note.body,
            'author': book_note.author,
            'categories': categories,
            'time_posted': book_note.timestamp
        })
    return jsonify({'book_notes': book_notes})


@app.route('/contact', methods=['POST'])
def contact():
    form_data = request.get_json()
    #if form.validate_on_submit():
    send_contact_form(form_data['subject'], form_data['email'], form_data['text'])
    
    flash('Email sent {}, remember_me={}'.format(
            form_data['subject'], form_data['email']))

    return 'Done', 201


@app.route('/software')
def software():
    user = 'garethiv'
    git = git_stats(user)
    return jsonify({'git': git})
