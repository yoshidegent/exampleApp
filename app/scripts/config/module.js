(function(){
  angular.module('exampleApp.config', [])
    .constant('apiUrl', 'http://jsonplaceholder.typicode.com')
    .value('appTitle', 'AppTitle');
})();
