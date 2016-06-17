var angular = require('angular')
require('angular-route')

var module = angular.module('demoApp', [ 'ngRoute' ])

require('./routes/main/main.controller')
require('./routes/login/login.controller')
require('./routes/register/register.controller')
require('./services/message.service')

module.config(['$routeProvider', 'MessageServiceProvider', function ($routeProvider, MessageServiceProvider) {

  MessageServiceProvider.setBaseUrl('https://gentle-brushlands-6591.herokuapp.com/api')

  $routeProvider.when('/', {
    templateUrl: '/templates/main.view.html',
    controller: 'MainController',
    controllerAs: 'main'
  }).when('/login', {
    templateUrl: '/templates/login.view.html',
    controller: 'LoginController',
    controllerAs: 'login'
  }).when('/register', {
    templateUrl: '/templates/register.view.html',
    controller: 'RegisterController',
    controllerAs: 'register'
  })
}])

