from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.fields.html5 import TelField, EmailField
from wtforms.validators import DataRequired, Email
from wtforms.widgets import TextArea


class ContactForm(FlaskForm):
    subject = StringField('subject', validators=[DataRequired()])
    email = EmailField('Email', validators=[DataRequired(),
                    Email(message='Please enter a valid email address.')])
    body = StringField('Message', widget=TextArea())
    submit = SubmitField('Submit')
