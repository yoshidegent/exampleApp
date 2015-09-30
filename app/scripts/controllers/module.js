'use strict';

(function () {

  angular.module('exampleApp.controllers', [])
    .config(function () {
      console.log('controllers module config');
    }).run(function () {
      console.log('controllers module run');
    });

})();
