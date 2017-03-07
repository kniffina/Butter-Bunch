"use strict";

//measures the yoffset of the window on page scrolls. If it is < 100 it removes scrollClass (normal navbar)
//If it is more than 100 it adds the scroll class (alters navbar)
angular.module("butter").directive('changeNavbarScroll', function($window) {
    return {
        restrict: 'A',
        scope: {
            shrink: '@'
        },
        link: function(scope, element) {
            angular.element($window).bind("scroll", function() {
                if(this.pageYOffset < 100) {
                    element.removeClass("shrink");
                    element.addClass("navCustom");
                }
                else {
                    element.addClass("shrink");
                    element.removeClass("navCustom");
                }
            })
        }
    }
});

// Simple directive to allow the navbar to binded to other html pages
angular.module("butter").directive('navBar', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/navigation/navigation.html',
        controller: 'NavigationCtrl'
    };
});