(function () {
  'use strict'

  angular.module('demoApp').provider('UserService', function () {

    var baseUrl

    this.setBaseUrl = function (url) {
      baseUrl = url + '/users'
    }

    var UserService = function ($http) {
      var self = this
      this.register = function (user) {
        return $http.post(baseUrl, user)
      }
      this.login = function (user) {
        return $http.get(baseUrl, {
          params: {
            conditions: {
              email: user.email,
              password: user.password
            }
          }
        }).then(function (data) {
          if (data.data && data.data.length) {
            self.loggedIn = data.data[ 0 ]
            return data.data[ 0 ]
          }
          return false
        })
      }
      this.getUsers = function () {
        return $http.get(baseUrl).then(function (data) {
          return data.data
        })
      }

      this.isLoggedIn = function () {
        return !!self.loggedIn
      }
      this.getLoggedInUser = function () {
        return self.loggedIn
      }
      this.logout = function () {
        delete self.loggedIn
      }
    }

    this.$get = [ '$http', function ($http) {
      return new UserService($http)
    } ]
  })
})()
