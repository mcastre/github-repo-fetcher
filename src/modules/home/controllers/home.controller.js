export default class HomeController {
  constructor(GithubService) {
    'ngInject';
    this.githubService = GithubService;
    this.search = {
      text: ''
    };
  }

  retrieveRepo (username) {
    let usernameToFetch = username.toString().toLowerCase();
    this.repos = this.githubService.getRepos({ username: usernameToFetch });
  }
}

HomeController.$inject = ['GithubService'];
