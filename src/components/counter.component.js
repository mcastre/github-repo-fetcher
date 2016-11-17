import angular from 'angular';
import templateUrl from '../templates/counter-component.html';

class controller {
  constructor() {
    this.repos.$promise.then(results => {
      this.count = results.length;
    });
  }
}

export default {
  controller,
  templateUrl,
  bindings: {
    repos: '<repos'
  }
};
