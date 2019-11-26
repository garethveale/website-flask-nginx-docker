import requests

URL = 'https://api.github.com/'


def git_stats(user):
    ''' Get all github repo '''
    repos = {}
    url = 'users/{}/repos'.format(user)
    response = requests.get(URL + url).json()
    for repo in response:
        repos[repo['name']] = repo
    return repos
