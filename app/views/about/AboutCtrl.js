(function() {
    "use strict";

    angular.module("butter").controller("AboutCtrl", ['$scope', '$window','$state', '$log', AboutCtrl]);

    function AboutCtrl($scope, $window, $state, $log) {


        var window = angular.element($window);

        var height = window.height();
        var width = window.width();

        console.log(height);
        console.log(width);
    }

}());