(function () {
  angular.module('exampleApp.services')
    .factory('backendService', function ($http, apiUrl, $q) {
      return {
        getAlbums: function() {

          var defer = $q.defer();

          $http.get(apiUrl + '/albums').then(function(response){
            var albums = response.data;

            defer.resolve(albums);
          });

          return defer.promise;
        }
      }
    });
})();
