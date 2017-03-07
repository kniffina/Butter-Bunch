(function() {
    "use strict";

    angular.module("butter").controller("ContactCtrl", ['$scope', '$window','$state', '$log', ContactCtrl]);

    function ContactCtrl($scope, $window, $state, $log, instagram) {
        $scope.$watch()

        var window = angular.element($window);

        var height = window.height();
        var width = window.width();

        console.log(height);
        console.log(width);
    }

}());