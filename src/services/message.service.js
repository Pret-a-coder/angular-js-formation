(function () {
  'use strict'

  angular.module('demoApp').provider('MessageService', function () {

    var baseUrl

    this.setBaseUrl = function (url) {
      baseUrl = url + '/messages'
    }

    var MessageService = function ($q, $timeout, $http) {
      this.getMessages = function () {
        return $http.get(baseUrl).then(function (data) {
          return data.data
        })
      }
      this.sendMessage = function (message) {
        return $http.post(baseUrl, message)
      }
    }

    this.$get = [ '$q', '$timeout', '$http', function ($q, $timeout, $http) {
      return new MessageService($q, $timeout, $http)
    } ]
  })
})()
