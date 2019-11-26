# pull official base image
# FROM python:3.6-alpine

# RUN adduser -D garethveale

# # set work directory
# WORKDIR /home/garethveale

# # set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# COPY requirements.txt requirements.txt
# RUN python -m venv venv
# RUN venv/bin/pip install -r requirements.txt
# RUN venv/bin/pip install gunicorn

# COPY api api
# COPY main.py config.py boot.sh ./
# RUN chmod +x boot.sh

# ENV FLASK_APP main.py

# RUN chown -R garethveale:garethveale ./
# USER garethveale

# EXPOSE 5000
# ENTRYPOINT ["./boot.sh"]

# pull official base image
FROM python:3.8.0-alpine

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# copy project
COPY . /usr/src/app/
RUN chmod +x entrypoint.sh

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]