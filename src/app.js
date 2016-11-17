import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './modules/home';

// BOOTSTRAP CSS ----------------------------

import './stylesheets/bootstrap.min.css';
import './stylesheets/bootstrap-theme.min.css';

// MAIN APP CSS ----------------------------

import './stylesheets/app.css';


// VENDOR JS SCRIPTS ----------------------------

import './vendor/ui-bootstrap-tpls-2.2.0.min.js';

angular.module('app', [uirouter, home])
  .config(routing);
