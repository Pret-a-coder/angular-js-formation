(function () {
  'use strict'
  angular.module('demoApp').controller('MainController', [ function () {
    this.messages = [ '> Bienvenue dans le chat', '@Riri: Quelqu\'un a vu Loulou ? ' ]
    this.sendMessage = function () {
      this.messages.push('@Anonymous: ' + this.newMessage)
      this.newMessage = ''
    }
  } ])
})()
