(function () {
  'use strict'
  angular.module('demoApp').controller('LoginController', [ '$location', 'UserService', function ($location, UserService) {
    var self = this

    self.login = function (user) {
      UserService.login(user).then(function (user) {
        if (user) {
          $location.path('/')
        }
      })
    }
  } ])
})()
