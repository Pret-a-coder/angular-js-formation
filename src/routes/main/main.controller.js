(function () {
  'use strict'
  angular.module('demoApp').controller('MainController', [ '$scope', function ($scope) {

    $scope.messages = [ '> Bienvenue dans le chat', '@Riri: Quelqu\'un a vu Loulou ? ' ]
    $scope.sendMessage = function () {
      $scope.messages.push('@Anonymous: ' + $scope.newMessage)
      $scope.newMessage = ''
    }
  } ])
})()
