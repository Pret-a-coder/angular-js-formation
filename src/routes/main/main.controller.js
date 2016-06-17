(function () {
  'use strict'
  angular.module('demoApp').controller('MainController', [ '$scope', '$interval', 'MessageService', function ($scope, $interval, MessageService) {
    var self = this

    function init () {
      self.interval = $interval(getMessages, 5000)
    }

    function getMessages () {
      return MessageService.getMessages().then(function (messages) {
        self.messages = messages
      })
    }

    init()

    $scope.$on('$destroy', function () {
      if (self.interval) $interval.cancel(self.interval)
    })

    this.sendMessage = function () {
      MessageService.sendMessage({ user: '@Anonymous', message: self.newMessage }).then(getMessages)
      self.newMessage = ''
    }
  } ])
})()
