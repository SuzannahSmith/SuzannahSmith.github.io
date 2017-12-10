angular.module('suzieApp')
.controller('headerController', function($scope) {
	$scope.title = 'Suzannah Smith';
})
.directive('myHeader', function() {
	return {
		templateUrl: "app/header/my-header.html"
	};
});