/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("butter", ["ngResource", "ui.router", "ui.mask", "ui.bootstrap", "ngAnimate"]);


    // ** Routing
    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise("/");


                $stateProvider
                    .state("main", {
                        url: "/main",
                        templateUrl: "app/views/main/main.html",
                        controller: "MainCtrl",
                        controllerAs: "main"
                    })
                        .state("entry", {
                        url: "/",
                        templateUrl: "app/views/entry/entry.html",
                        controller: "EntryCtrl",
                        controllerAs: "entry"
                    })
                    .state("about", {
                        url: "/about",
                        templateUrl: "app/views/about/about.html",
                        controller: "AboutCtrl",
                        controllerAs: "about"
                    })
                    .state("roster", {
                        url: "/roster",
                        templateUrl: "app/views/roster/roster.html",
                        controller: "RosterCtrl",
                    })
                    .state("contact", {
                        url: "/contact",
                        templateUrl: "app/views/contact/contact.html",
                        controller: "ContactCtrl",
                        controllerAs: "contact"
                    })

            }]
    );
}());