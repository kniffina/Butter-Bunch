
"use strict";

angular.module('butter').factory('rosterService',
    ['$timeout', function($timeout) {
        var roster = [
            {
                rosterId: 1,
                name: 'Rory McManus',
                imageUrl: "images/animal1.jpg"
            },
            {
                rosterId: 2,
                name: 'Skyler McManus',
                imageUrl: "images/animal2.jpg"
            },
            {
                rosterId: 3,
                name: 'Derek Adent',
                imageUrl: "images/animal3.jpg"
            },
            {
                rosterId: 4,
                name: 'Andrew Telleria',
                imageUrl: "images/animal4.jpg"
            },
            {
                rosterId: 5,
                name: 'Kyle Kniffin',
                imageUrl: "images/animal5.jpg"
            },
            {
                rosterId: 6,
                name: 'Nick Rhoten',
                imageUrl: "images/animal6.jpg"
            }
        ];

        var getRoster = function() {
            return roster;
        }

        return {
            getRoster: getRoster
        };



    }]);

