var angular = require('angular')
require('angular-route')
require('ngstorage')

var module = angular.module('demoApp', [ 'ngRoute', 'ngStorage' ])

require('./routes/main/main.controller')
require('./routes/login/login.controller')
require('./routes/register/register.controller')
require('./services/user.service')
require('./services/message.service')
require('./filters/initial.filter')
require('./directives/avatar.directive')

module.config(['$routeProvider', 'MessageServiceProvider', 'UserServiceProvider', function ($routeProvider, MessageServiceProvider, UserServiceProvider) {

  MessageServiceProvider.setBaseUrl('https://gentle-brushlands-6591.herokuapp.com/api')
  UserServiceProvider.setBaseUrl('https://gentle-brushlands-6591.herokuapp.com/api')

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

