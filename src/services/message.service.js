(function () {
  'use strict'

  angular.module('demoApp').provider('MessageService', function () {

    var baseUrl

    this.setBaseUrl = function (url) {
      baseUrl = url
    }

    var MessageService = function ($q, $timeout) {
      this.messages = [
        { user: 'Rifi', message: 'Quelqu\'un a vu lolou ?' }
      ]
      this.getMessages = function () {
        var self = this
        return $q(function (resolve) {
          $timeout(function () {
            resolve(self.messages)
          }, 10)
        })
      }
      this.sendMessage = function (message) {
        var self = this
        return $q(function (resolve) {
          $timeout(function () {
            self.messages.push(message)
            resolve(true)
          }, 10)
        })
      }
    }

    this.$get = [ '$q', '$timeout', function ($q, $timeout) {
      return new MessageService($q, $timeout)
    } ]
  })
})()
