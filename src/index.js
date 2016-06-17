var angular = require('angular')
require('angular-route')

var module = angular.module('demoApp', [ 'ngRoute' ])

require('./routes/main/main.controller')
require('./services/message.service')

module.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/templates/main.view.html',
    controller: 'MainController',
    controllerAs: 'main'
  })
})

