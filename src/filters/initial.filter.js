(function () {
  'use strict'

  angular.module('demoApp').filter('initial', function () {
    return function (user) {
      if (!user.firstName || !user.lastName) return 'ZZ'
      return user.firstName[ 0 ].toUpperCase() + user.lastName[ 0 ].toUpperCase()
    }
  })
})()
