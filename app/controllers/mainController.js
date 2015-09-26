'use strict';

angular.module('controllers', []).controller('View1Ctrl', function($scope) {

  $scope.mainInput = "0";
  $scope.nums = [['(', ')', '%', 'CE'], [9, 8, 7, '÷'], [6, 5, 4, 'x'], [3, 2, 1, '-'], [0, '.', '=', '+']];

  $scope.isChar = function (num) {
    if (num == '.')
      return false;
    return typeof num != 'number';
  };

  $scope.onClickButton = function (key) {
    console.log(key);
    switch (key) {
      case '+': {
        $scope.mainInput += key;
        break;
      }
      case '-': {
        $scope.mainInput += key;
        break;
      }
      case 'x': {
        $scope.mainInput += key;
        break;
      }
      case '÷': {
        $scope.mainInput += key;
        break;
      }
      case '%': {

        break;
      }
      case '=': {

        break;
      }
      case '.': {
        $scope.mainInput += key;
        break;
      }
      case 'CE': {
        $scope.mainInput = "0";
        break;
      }
      default : {
        if ($scope.mainInput == "0") {
          $scope.mainInput = "";
        }
        $scope.mainInput += key;
        break;
      }
    }
  };
});