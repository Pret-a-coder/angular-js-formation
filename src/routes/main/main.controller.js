(function () {
  'use strict'
  angular.module('demoApp').controller('MainController', [ 'MessageService', function (MessageService) {
    var self = this

    function init () {
      MessageService.getMessages().then(function (messages) {
        self.messages = messages
      })
    }

    init()
    this.sendMessage = function () {
      MessageService.sendMessage({ user: '@Anonymous', message: self.newMessage }).then(init)
      self.newMessage = ''
    }
  } ])
})()
