(function() {
    "use strict";

    angular.module("butter").controller("NavigationCtrl", ['$scope', '$window','$state', '$log', '$location', NavigationCtrl]);

    function NavigationCtrl($scope, $window, $state, $log, $location) {

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    }

}());