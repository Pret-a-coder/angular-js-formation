(function () {
  'use strict'
  angular.module('demoApp').controller('MainController', [ '$scope', function ($scope) {
    $scope.messages = '\n > Bienvenue dans le chat \n @Riri: Quelqu\'un a vu Loulou ? '
  } ])
})()
