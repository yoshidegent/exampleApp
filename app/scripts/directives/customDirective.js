(function () {
  angular.module('exampleApp.directives')
    .directive('customDirective', function () {

      return {
        templateUrl: 'views/customDirective.html',
        restrict: 'EA' // E: can be used as element, A: can be used as template
      }
    });

})();
