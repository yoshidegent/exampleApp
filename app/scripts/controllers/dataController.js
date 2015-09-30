(function(){
  angular.module('exampleApp.controllers')
    .controller('dataController', DataController);

  function DataController($scope, $routeParams) {
    $scope.urlParam = $routeParams.exampleArgs;
  }
})();
