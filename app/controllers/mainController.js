angular.module('controllers', []).controller('View1Ctrl', function($scope) {

  $scope.mainInput = "0";
  $scope.internalInput = "0";
  $scope.ans = "";
  $scope.nums = [['(', ')', '%', 'AC'], [9, 8, 7, '÷'], [6, 5, 4, 'x'], [3, 2, 1, '-'], [0, '.', '=', '+']];

  $scope.isChar = function (num) {
    if (num == '.')
      return false;
    return typeof num != 'number';
  };

  $scope.onClickButton = function (key) {
    console.log(key);
    switch (key) {
      case '+': {
        $scope.internalInput += key;
        $scope.mainInput += key;
        break;
      }
      case '-': {
        $scope.internalInput += key;
        $scope.mainInput += key;
        break;
      }
      case 'x': {
        $scope.internalInput += '*';
        $scope.mainInput += key;
        break;
      }
      case '÷': {
        $scope.internalInput += '/';
        $scope.mainInput += key;
        break;
      }
      case '%': {
        $scope.internalInput += key;
        $scope.mainInput += key;
        break;
      }
      case '=': {
        $scope.ans = $scope.mainInput;
        $scope.mainInput = eval($scope.internalInput);
        break;
      }
      case '.': {
        $scope.internalInput += key;
        $scope.mainInput += key;
        break;
      }
      case 'AC': {
        $scope.internalInput = "0";
        $scope.ans = "";
        $scope.mainInput = "0";
        break;
      }
      default : {
        if ($scope.mainInput == "0") {
          $scope.mainInput = "";
          $scope.internalInput = "";
        }
        $scope.internalInput += key;
        $scope.mainInput += key;
        break;
      }
    }
  };
});