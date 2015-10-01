(function () {
  angular.module('exampleApp.directives')
    .directive('simpleDirective', function () {

      return function (scope, element, attrs) {
        element.text('from directive');
      }
    })

})();
