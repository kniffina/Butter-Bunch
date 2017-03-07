(function() {
    "use strict";

    angular
        .module("butter")
        .controller("EntryCtrl", ['$scope', '$timeout', '$interval', '$animate', EntryCtrl]);

    function EntryCtrl($scope, $timeout, $interval, $animate) {

        console.log($scope);
        $scope.soundButton = function() {
            if($('#snowfall').prop('muted')) {
                $('#snowfall').prop('muted', false);
                $("#soundColor").text("On");
            } else {
                $("#snowfall").prop('muted', true);
                $("#soundColor").text("Off");
            }
        };


        var index = 0; //used to keep track of where we are in the array
        $scope.heading = "We are the Butter Bunch";
        var firstHeading = 0;
        $scope.message = "This is awesome";


        $scope.startIt = function() {

            var start = $interval(function () {
                console.log(index);

                if(index === 0) {
                    $scope.heading = "We are the Butter Bunch";
                    if(firstHeading === 0) {
                        //if its the first time we dont need to fade it in, because its there
                        firstHeading = 1;
                        $('.heading').animate({ opacity: 0}, 1500);
                    }
                    else {
                        $('.heading').animate({ opacity: 1 }, 1500).delay(1500).animate({ opacity: 0}, 1500);
                    }

                }
                else if(index === 1) {
                    $scope.heading = "A group of ballers";
                    $('.heading').animate({ opacity: 1 }, 1500).delay(1500).animate({ opacity: 0}, 1500);

                }
                else  {
                    $scope.heading = "Who enjoy snowboarding";
                    $('.heading').animate({ opacity: 1 }, 1500).delay(1500).animate({ opacity: 0}, 1500);
                }

                //iterate array
                index = ++index;

                //if index is = to amount of msg items (pretty bad coding but whatevs!)
                if (index === (3)) {
                    index = 0;
                }

            }, 5000);
        }
        $scope.startIt();


    }
}());