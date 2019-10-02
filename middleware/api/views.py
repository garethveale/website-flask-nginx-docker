from api import app
from api.forms import ContactForm
from api.models import Post, BookNote
# from api.email import send_contact_form
from flask import jsonify


@app.route('/')
def index():
    posts = []
    post_list = Post.query.all()

    for post in post_list:
        categories = [category.name for category in post.categories]
        posts.append({
            'title': post.title,
            'body': post.body,
            'categories': categories,
            'time_posted': post.timestamp
        })

    return jsonify({'posts': posts})

# @app.route('/contact', methods=['GET', 'POST'])
# def contact():
#     form = ContactForm()
#     if form.validate_on_submit():
#         send_contact_form(form.first_name, form.surname, form.phone_number, form.email, form.body)
#         flash('Email sent to Gareth')  # TODO remove this
#         return redirect(url_for('index'))
#     return 'Form should be displayed'
