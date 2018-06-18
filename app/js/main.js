'use strict';
global.$ = global.jQuery = require('jquery');

let angular = require('angular'),
    route   = require('angular-route'),
    uib     = require('angular-ui-bootstrap'),
    touch   = require('angular-touch');

require('bootstrap/dist/js/bootstrap.min.js');
require('../css/imported/import.css');

let IndexCtrl           = require('../js/controllers/indexController'),
    HomeCtrl            = require('../js/controllers/homeController'),
    RecipesCtrl         = require('../js/controllers/recipesController'),
    CateringCtrl        = require('../js/controllers/cateringController'),
    AboutCtrl           = require('../js/controllers/aboutController');

let app = angular.module('HomeGrownMeals', [route, uib, touch]);

app.config(function ($routeProvider, $httpProvider) {
    $routeProvider.when("/home", {templateUrl: "../views/home.html", controller: "HomeCtrl"})
        .when("/recipes", {templateUrl: "../views/recipes.html", controller: "RecipesCtrl"})
        .when("/catering", {templateUrl: "../views/catering.html", controller: "CateringCtrl"})
        .when("/about", {templateUrl: "../views/about.html", controller: "AboutCtrl"})
        .otherwise({redirectTo: "/home"});
});

app.controller("IndexCtrl", ["$rootScope", "$scope", "$location", "$window", IndexCtrl]);
app.controller("HomeCtrl", ["$rootScope", "$scope", "$location", "$window", HomeCtrl]);
app.controller("RecipesCtrl", ["$rootScope", "$scope", "$location", "$window", RecipesCtrl]);
app.controller("CateringCtrl", ["$rootScope", "$scope", "$location", "$window", CateringCtrl]);
app.controller("AboutCtrl", ["$rootScope", "$scope", "$location", "$window", AboutCtrl]);

app.factory('server', ['$http', server]);
app.factory('modalControllers', ['$uibModal', modalControllers]);

/*
app.service('SessionService', ['$injector', '$window', SessionService]);
app.service('LocationService', LocationService);
app.factory('retrieve', ['$http', retrieve]);
app.factory('modalControllers', ['$uibModal', modalControllers]);
app.filter('tel', tel);
app.directive('phoneInput', ['$filter', '$browser', phoneInput]);
app.directive('pwCheck', pwCheck);
 */

