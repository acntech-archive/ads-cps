'use strict';

angular.module('adsCpsApp').controller('ImageController', function ($scope, ImageService) {
  ImageService.readAll().then(function (images) {
    $scope.images = images;
  }, function (error) {
    $scope.errorMessage = error.data;
  });
});
