import templateUrl from './views/home.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'body@': {
          templateUrl,
          controller: 'HomeController',
          controllerAs: 'home'
        }
      }
    });
}
