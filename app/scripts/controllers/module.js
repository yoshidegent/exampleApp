'use strict';

(function () {
  angular.module('exampleApp.controllers', ['exampleApp.config', 'ngRoute', 'exampleApp.services', 'exampleApp.directives'])
    .config(function(apiUrl, $routeProvider, backendServiceProvider) {
      console.log('url: ' + apiUrl);

      backendServiceProvider.setApiUrl(apiUrl);

      $routeProvider.when('/', {
        templateUrl: 'views/home.html'
      });
      $routeProvider.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'exampleController'
      });
      $routeProvider.when('/data', {
        templateUrl: 'views/data.html',
        controller: 'dataController'
      });


      $routeProvider.otherwise({
        redirectTo: 'views/home.html'
      });


    })
    .run(function() {
      console.log("controllers module run");
    });

})();

