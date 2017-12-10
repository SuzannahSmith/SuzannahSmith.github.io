/*
Author: Suzannah Smith
February 9, 2017
*/

var suzieApp = angular.module('suzieApp', ['ui.router']);

suzieApp.controller('mainController', function($scope) {
	$scope.message = 'This is my profile';
});


suzieApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html'
        })
        .state('experience', {
            url: '/experience',
            templateUrl: 'app/experience/experience.html'     
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'app/projects/projects.html'     
        });
});

