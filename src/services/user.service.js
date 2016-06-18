(function () {
  'use strict'

  angular.module('demoApp').provider('UserService', function () {

    var baseUrl

    this.setBaseUrl = function (url) {
      baseUrl = url + '/users'
    }

    var UserService = function ($http, $sessionStorage) {
      this.register = function (user) {
        return $http.post(baseUrl, user)
      }
      this.getLoggedInUser = function () {
        return $sessionStorage.user
      }
      this.logout = function () {
        delete $sessionStorage.user
      }
      this.login = function (user) {
        return $http.get(baseUrl,
          {
            params: {
              conditions: { email: user.email, password: user.password }
            }
          }).then(
          function (data) {
            if (data.data && data.data.length) {
              $sessionStorage.user = data.data[ 0 ]
              return data.data[ 0 ]
            }
          })
      }
      this.getUsers = function () {
        return $http.get(baseUrl).then(function (httpResponse) {
          return httpResponse.data
        })
      }
    }

    this.$get = [ '$http', '$sessionStorage', function ($http, $sessionStorage) {
      return new UserService($http, $sessionStorage)
    } ]
  })
})()
