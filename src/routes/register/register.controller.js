;(function () {
  var _ = require('lodash')
  'use strict'
  angular.module('demoApp').controller('RegisterController', [ '$location', 'UserService', function ($location, UserService) {
    var self = this

    function register (user) {
      var usr = _.clone(user)
      if (usr.pwd1 === usr.pwd2) {
        usr.password = usr.pwd1
        delete usr.pwd1
        delete usr.pwd2
      }
      UserService.register(usr).then(function () {
        $location.path('/login')
      })
    }

    _.extend(self, {
      register: register
    })
  } ])
})()
