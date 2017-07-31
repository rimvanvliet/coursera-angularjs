(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    // $scope.lunchCheckMessage = "";

    $scope.checkLunch = function() {
      var lunchMessageLength = ($scope.lunchMessage ? $scope.lunchMessage.split(',').length : 0);
      if (lunchMessageLength == 0) {
        $scope.lunchCheckMessage = "Please enter data first";
        $scope.messageType = "error";
      } else if (lunchMessageLength <= 3) {
        $scope.lunchCheckMessage = "Enjoy!";
        $scope.messageType = "success";
      } else {
        $scope.lunchCheckMessage = "Too Much!";
        $scope.messageType = "warning";
      }
    }
  }
})();
