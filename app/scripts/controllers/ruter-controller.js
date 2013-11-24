'use strict';

angular.module('adsCpsApp').controller('RuterController', function ($scope, RuterService) {
  RuterService.readAll().then(function (departures) {
    $scope.departures = departures;
  }, function (error) {
    $scope.errorMessage = error.data;
  });
});
