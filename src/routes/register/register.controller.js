(function () {
  'use strict'
  angular.module('demoApp').controller('RegisterController', [ '$location', 'UserService', function ($location, UserService) {
    var self = this

    self.register = function (user) {
      if (user.pwd1 === user.pwd2) {
        user.password = user.pwd2
      }
      UserService.register(user).then(
        function () {
          $location.path('/login')
        })
    }
  } ])
})()
