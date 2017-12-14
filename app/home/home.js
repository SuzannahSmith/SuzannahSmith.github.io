angular.module('suzieApp')
.controller('homeController', ['$scope', 'scrollService',
	function($scope, scrollService) {
   		$scope.scrollToElement = function(elementId, offset){
   			scrollService(elementId, offset);
    	}

    	$scope.modalShown = false;
		$scope.openModal = function(img) {
			$("#modal-" + img).modal('show');
		};
	}
]);	