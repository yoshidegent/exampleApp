'use strict';

(function () {

  angular.module('exampleApp.controllers', ['exampleApp.config'])
    .config(function (apiUrl) {
      console.log('controllers module config');
      console.log('apiUrl: ' + apiUrl);
    }).run(function () {
      console.log('controllers module run');
    });
})();
