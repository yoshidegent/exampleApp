(function () {
  angular.module('exampleApp.controllers').controller('exampleController', ExampleController);

  function ExampleController($scope) {
    console.log('create ExampleController');

    $scope.data = [
      {prop: 'a'}, {prop: 'b'}, {prop: 'c'}];


    $scope.$on('userclicked', function(event, data){
      console.log(data);
      $scope.message = data.number;
    });

    $scope.submitForm = function(inputText)
    {
      console.log("submit " + inputText);
    };
  }
})();
