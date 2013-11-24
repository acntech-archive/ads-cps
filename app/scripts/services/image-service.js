'use strict';

angular.module('adsCpsApp').factory('ImageService', function ($resource) {
  var imageResource = $resource('/api/sources/file', {}, {});

  return {
    readAll: function () {
      return imageResource.get().$promise;
    }
  };
});
