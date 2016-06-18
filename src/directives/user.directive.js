(function () {
  'use strict'
  function hashCode (str) { // java String#hashCode
    var hash = 0
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    return hash
  }

  function intToRGB (i) {
    var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase()
    return '00000'.substring(0, 6 - c.length) + c
  }

  angular.module('demoApp').directive('user', function () {
    return {
      templateUrl: '/templates/user.directive.html',
      controller: [ '$scope', function ($scope) {
        $scope.getColor = function (user) {
          if (!user) return '#ffffff'
          if (typeof user === 'string') return '#' + intToRGB(hashCode(user))
          return '#' + intToRGB(hashCode(user.firstName + user.lastName))
        }
      } ],
      restrict: 'E',
      scope: {
        user: '='
      }
    }
  })
})()
