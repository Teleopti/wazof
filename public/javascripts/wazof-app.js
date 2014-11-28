var wazof = angular.module('wazof', ['ui.bootstrap']);
wazof.controller('main', ['$scope', '$modal', function ($scope, $modal) {
    $scope.employee = {};
    $scope.vacations = [];
    $scope.monthDays1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.monthDays2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    $scope.monthDays3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


    $scope.printVacation = function (e) {
        window.print();
    };

    $scope.selectDetails = function (e) {
        $scope.currentDay = {};
        $scope.currentDay.date = e.target.innerHTML;
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm'
        });

        modalInstance.result.then(function (code) {
            $scope.currentDay.code = code;
            $scope.vacations.push($scope.currentDay);
            $scope.currentDay = {};
        }, function () {
            // after
        });
    };
}]);

wazof.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

    $scope.codes = [
        {name: 'Sjukavdrag (timmar)', value: 1},
        {name: 'Föräldraledig + barnets namn (timmar)', value: 2},
        {name: 'Tillfällig föräldrapenning (VAB) (timmar)', value: 3},
        {name: 'Tillfällig föräldrapenning vid födsel ("pappadagar") (timmar)', value: 4},
        {name: 'Semester (heldagar)', value: 5},
        {name: 'Arbetstidsförkortning (valfria halv- eller heldagar)', value: 6},
        {name: 'Tjänstledighet med löneavdrag (timmar)', value: 7},
        {name: 'Tjänstledighet utan löneavdrag (permission) (timmar)', value: 8},
        {name: 'Vård av anhörig (timmar)', value: 9}
    ];
    $scope.selectedCode = '1';

    $scope.ok = function () {
        $modalInstance.close($scope.selectedCode);//$scope.selected.item
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});