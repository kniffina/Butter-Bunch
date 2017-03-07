(function() {
    "use strict";

    angular.module("butter").controller("RosterCtrl", ['$scope', '$window','$state', '$uibModal', 'rosterService', RosterCtrl]);

    function RosterCtrl($scope, $window, $state, $uibModal, rosterService) {


        //return the array from the service to roster
        $scope.data = rosterService.getRoster();


        $scope.goToPerson = function(person) {
            console.log(person);

            var options = {
                templateUrl: 'app/views/roster/RosterModal.html',
            }
            $uibModal.open(options);
        }

        // $scope.goToPerson = function(person) {
        //     console.log(person);
        //
        // }




    }

}());