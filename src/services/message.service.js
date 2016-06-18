(function () {
  'use strict'

  angular.module('demoApp').provider('MessageService', [ function () {

    var baseUrl

    this.setBaseUrl = function (url) {
      baseUrl = url + '/messages'
    }

    var MessageService = function ($q, $timeout, $http, UserService) {
      this.getMessages = function () {
        return $http.get(baseUrl, { params: { populate: { path: 'user' } } }).then(function (data) {
          return data.data
        })
      }
      this.sendMessage = function (message) {
        message.postedAt = new Date()
        message.user = UserService.getLoggedInUser()
        return $http.post(baseUrl, message)
      }
    }

    this.$get = [ '$q', '$timeout', '$http', 'UserService', function ($q, $timeout, $http, UserService) {
      return new MessageService($q, $timeout, $http, UserService)
    } ]
  } ])
})()
