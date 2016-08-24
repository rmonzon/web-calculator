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
        processKeyInput(key);
    };

    document.body.addEventListener("keypress", function (e) {
        console.log();
        if (e.which >= 48 && e.which <= 57 || e.which === 42 || e.which === 43 || e.which === 45 || e.which === 47) {
            processKeyInput(e.key);
            $scope.$apply();
            return;
        }
        console.log(e.key, e.which);
        e.preventDefault();
    }, false);

    function processKeyInput(key) {
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
    }
});