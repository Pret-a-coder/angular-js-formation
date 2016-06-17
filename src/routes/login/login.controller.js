(function () {
  'use strict'
  angular.module('demoApp').controller('LoginController', [ '$location', 'UserService', function ($location, UserService) {
    var self = this

    function login (user) {
      UserService.login(user).then(function (user) {
        if (user) {
          $location.path('/')
        } else {
          self.message = 'Incorrect Credentials'
        }
      })
    }

    _.extend(self, {
      login: login
    })
  } ])
})()
