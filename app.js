/*
Author: Suzannah Smith
February 9, 2017
*/

var suzieApp = angular.module('suzieApp', []);


suzieApp.controller('mainController', function($scope) {
	
	$scope.title = 'Suzannah Smith';
	$scope.message = 'This is my profile';
	
});