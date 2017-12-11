angular.module('suzieApp')
.factory('scrollService', ['$location', '$anchorScroll',
	function($location, $anchorScroll) {
    	return function(elementId, offset) {
    		offset = offset || 70;
    		
    		$location.hash(elementId);
    		$anchorScroll.yOffset = offset;
	    	$anchorScroll();
    	};
	}
]);	