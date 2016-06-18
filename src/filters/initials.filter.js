(function () {
  'use strict'

  angular.module('demoApp').filter('initials', function () {
    return function (input) {
      if (!input) return '?'
      return input.split(' ')
        .map(function (name) {
          if (!name || !name[0]) return
          return name[ 0 ].toUpperCase()
        }).join('')
    }
  })
})()
