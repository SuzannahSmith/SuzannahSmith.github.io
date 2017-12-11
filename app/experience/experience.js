angular.module('suzieApp')
.controller('experienceController', ['$scope', 'scrollService',
	function($scope, scrollService) {

		$scope.pageTitle = 'Experience';

   		$scope.scrollToElement = function(elementId, offset){
   			scrollService(elementId, offset);
    	}
	}
]);