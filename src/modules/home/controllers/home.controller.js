export default class HomeController {
  constructor(GithubService) {
    'ngInject';
    this.githubService = GithubService;
  }

  retrieveRepo () {
    this.repos = this.githubService.getRepos({username: 'mcastre'});
  }
}

HomeController.$inject = ['GithubService'];
