angular.module('suzieApp')
.controller('homeController', ['$scope', '$location', '$anchorScroll',
	function($scope, $location, $anchorScroll) {
   
    	$scope.goToElement = function(elementId) {
    		$location.hash(elementId);
    		$anchorScroll.yOffset = 70;
	    	$anchorScroll();
    	};
	}
]);	