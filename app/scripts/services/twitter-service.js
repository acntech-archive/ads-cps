'use strict';

angular.module('adsCpsApp').factory('TwitterService', function ($resource) {
  var twitterResource = $resource('/api/sources/twitter', {}, {});

  return {
    readAll: function () {
      return twitterResource.query().$promise;
    }
  };
});
