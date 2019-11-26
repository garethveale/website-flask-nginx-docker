import smtplib
import os


def send_contact_form(subject, email, body):
    message = '''
    Subject:{},
    Email:{},
    Message:{}
    '''.format(subject, email, body)
    try:
        server = smtplib.SMTP('smtp.gmail.com')
        server.starttls()
        server.login(
            os.environ.get('MAIL_USERNAME'),
            os.environ.get('MAIL_PASSWORD'))
        server.sendmail(
            'gareth.veale.dev@gmail.com',
            'gareth@garethveale.dev',
            message)
        server.quit()
    except smtplib.SMTPException:
        print('Unable to send email')
