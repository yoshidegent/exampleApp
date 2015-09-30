(function () {
  angular.module('exampleApp.controllers')
    .controller('appController', AppController);

  function AppController($scope, appTitle) {
    $scope.title = appTitle;

    $scope.sendEvent = function () {
      $scope.$broadcast('userclicked', {number: 123});
    }
  }

})();
