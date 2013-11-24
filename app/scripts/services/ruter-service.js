'use strict';

angular.module('adsCpsApp').factory('RuterService', function ($resource) {
  var ruterResource = $resource('/api/sources/ruter', {}, {});

  return {
    readAll: function () {
      return ruterResource.query().$promise;
    }
  };
});
