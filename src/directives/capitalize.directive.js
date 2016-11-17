import angular from 'angular';

function esCapitalize() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.html(toTitleCase(element.html()));
    }
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default angular.module('directives.capitalize', [])
  .directive('esCapitalize', esCapitalize)
  .name;

// export default class esCapitalize {
//   constructor() {
//     this.restrict = 'A';
//   }
//
//   link(scope, element) {
//     element.html(toTitleCase(element.html()));
//   }
// }
//
// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function(txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }
