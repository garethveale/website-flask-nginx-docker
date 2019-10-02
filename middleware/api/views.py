from api import app
from api.forms import ContactForm
# from api.email import send_contact_form
from flask import jsonify


@app.route('/')
def index():
    posts = ['post1', 'post2']
    return jsonify({'posts': posts})

# @app.route('/contact', methods=['GET', 'POST'])
# def contact():
#     form = ContactForm()
#     if form.validate_on_submit():
#         send_contact_form(form.first_name, form.surname, form.phone_number, form.email, form.body)
#         flash('Email sent to Gareth')  # TODO remove this
#         return redirect(url_for('index'))
#     return 'Form should be displayed'
