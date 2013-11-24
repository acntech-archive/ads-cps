'use strict';

angular.module('adsCpsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ruter', {
        templateUrl: 'views/ruter.html',
        controller: 'RuterController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
