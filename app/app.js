'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'controllers'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'templates/main.html',
        controller: 'View1Ctrl'
      })
      .otherwise({redirectTo: '/'});
}]);
