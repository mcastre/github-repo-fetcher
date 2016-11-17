import angular from 'angular';

class GithubService {
  constructor($resource) {
    'ngInject';
    var githubService = $resource(
      'https://api.github.com/users/:username/repos',
      {},
      {
        'getRepos': {
          method: 'GET',
          isArray: true
        }
      }
    );
    this.githubService = githubService;
    return githubService;
  }
};

export default angular.module('services.githubService', [])
  .service('GithubService', GithubService)
  .name;
