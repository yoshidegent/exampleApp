(function () {
  angular.module('exampleApp.controllers')
    .controller('appController', AppController);

  function AppController($scope, appTitle, $location) {
    $scope.title = appTitle;

    $scope.showTable = true;
    $scope.data = [{prop: 'a'}, {prop: 'b'}, {prop: 'c'}];

    $scope.sendEvent = function () {
      $scope.$broadcast('userclicked', {number: 123});
    }

    $scope.value = 'something';

    $scope.goto = function() {
      $location.path('/data');
    }
  }

})();
