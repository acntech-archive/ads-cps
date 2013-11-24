'use strict';

angular.module('adsCpsApp').controller('TwitterController', function ($scope, TwitterService) {
  TwitterService.readAll().then(function (tweets) {
    $scope.tweets = tweets;
  });
});
