'use strict';
var config = {
  params: {
      access_token: '1309c5d27cfa9065e76e67922ecc929dbd8fa39d'

  }
}
gitGistsApp.factory('httpService', function($http) {
    var httpService = {
      get: function(url) {
       var promise = $http.get(url, config).then(function (response) {
          return response.data;
        });
        return promise;
      }
    };
    return httpService;
  });