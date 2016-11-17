import './scss/home.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routing from './home.routes';
import HomeController from './controllers/home.controller';
import esCapitalize from '../../directives/capitalize.directive.js';
//import esCounter from '../../components/counter.component.js';
import githubService from '../../services/github.service.js';

export default angular.module('app.home', [uirouter, ngResource, githubService, esCapitalize])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
