angular.module('madlibs', [])
    .controller('madlibsController', ['$scope', function($scope) {

        $scope.showResults = false;
        $scope.errors = '';

        $scope.generate = function() {

            // all fields must be present
            if (!$scope.femaleName || !$scope.jobTitle || !$scope.tediousTask || !$scope.dirtyTask || !$scope.celebrity ||
                !$scope.uselessSkill || !$scope.obnoxiousCelebrity || !$scope.hugeNumber || !$scope.adjective) {
                $scope.errors = "Please complete all the input fields.";
            }
            else
            if (!isNumber($scope.hugeNumber)) {
                // hugeNumber must be numeric
                $scope.errors = "hugeNumber must be numeric.";
            }
            else {
                // all is good
                $scope.errors = '';
                $scope.showResults = true;
            }
        }

        // let's try again
        $scope.reset = function() {

            $scope.errors = '';
            $scope.showResults = false;
            $scope.femaleName = $scope.jobTitle = $scope.tediousTask = $scope.dirtyTask = $scope.celebrity = $scope.uselessSkill = $scope.obnoxiousCelebrity = $scope.hugeNumber = $scope.adjective = '';
        }
    }]);


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
