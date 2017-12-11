angular.module('suzieApp')
.controller('homeController', ['$scope', 'scrollService',
	function($scope, scrollService) {
   		$scope.scrollToElement = function(elementId, offset){
   			scrollService(elementId, offset);
    	}
	}
]);	