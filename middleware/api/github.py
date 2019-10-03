import requests
# TODO write own GitHub API handler

URL = 'https://api.github.com/'


def git_stats(user):
    ''' Get all github statistics '''
    user_data = get_user(user)
    response = get_repositories(user)
    return response


def get_user(user):
    url = 'users/{}'.format(user)
    return requests.get(URL + url).json()


def get_repositories(user):
    repos = {}
    url = 'users/{}/repos'.format(user)
    response = requests.get(URL + url).json()
    for repo in response:
        repos[repo['name']] = repo
    return repos
