(function () {
  angular.module('exampleApp.controllers').controller('exampleController', ExampleController);

  function ExampleController($scope) {
    console.log('create ExampleController');

    $scope.$on('userclicked', function(event, data){
      console.log(data);
      $scope.message = data.number;
    });
  }
})();
