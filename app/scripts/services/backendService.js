(function () {
  angular.module('exampleApp.services')
    .provider('backendService', function () {
      //provider
      var url;
      return {
        
        setApiUrl : function(apiUrl) {
          url = apiUrl;
        },

        $get: function ($http, $q) {
          //Service
          return {
            getAlbums: function () {

              var defer = $q.defer();

              $http.get(url + '/albums').then(function (response) {
                var albums = response.data;

                defer.resolve(albums);
              });

              return defer.promise;
            }

          }
        }
      }
    });
  /*
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
   */
})();
