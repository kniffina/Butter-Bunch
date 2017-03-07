(function() {
    "use strict";

    angular.module("butter").controller("MainCtrl", ['$scope', '$window','$state', '$log', 'instagram', MainCtrl]);

    function MainCtrl($scope, $window, $state, $log, instagram) {

        $scope.slides = [];
        $scope.data = {};

        instagram.fetchPhotos(function(data) {
            $scope.slides = data;
            console.log(data);
        });

        //for slider implementation


        //end of slider implementation

    }


}());