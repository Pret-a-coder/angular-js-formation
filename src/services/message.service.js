(function () {
  'use strict'

  angular.module('demoApp').provider('MessageService', function () {

    var baseUrl

    this.setBaseUrl = function (url) {
      baseUrl = url + '/messages'
    }

    var MessageService = function ($q, $timeout, $http) {
      this.getMessages = function () {
        return $http.get(baseUrl, {params: {populate: {path: 'user', ref:'user'}}}).then(function (data) {
          return data.data
        })
      }
      this.sendMessage = function (message) {
        message.postedAt = new Date()
        return $http.post(baseUrl, message)
      }
    }

    this.$get = [ '$q', '$timeout', '$http', function ($q, $timeout, $http) {
      return new MessageService($q, $timeout, $http)
    } ]
  })
})()
