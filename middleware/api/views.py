from api import app
from api.forms import ContactForm
from api.send_email import send_contact_form
from api.github import git_stats
from flask import jsonify, request, flash

@app.route('/contact', methods=['POST'])
def contact():
    form_data = request.get_json()
    send_contact_form(form_data['subject'], form_data['email'], form_data['text'])
    return 'Done', 201


@app.route('/software')
def software():
    user = 'garethiv'
    git = git_stats(user)
    return jsonify({'git': git})
