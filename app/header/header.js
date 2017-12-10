angular.module('suzieApp')
.controller('headerController', ['$scope', '$state', function($scope, $state) {
	$scope.title = 'Suzannah Smith';

	$scope.states = {'experience': 'Experience', 
					'projects': 'Personal Projects', 
					'travel': 'Travel'};

	$scope.currentState = getCurrentState();

	$scope.changeState = function(stateName) {
		$state.transitionTo(stateName);
		$scope.currentState = stateName;
		console.log($scope.currentState);
	};

	$scope.isCurrentState = function(stateName) {
		return stateName == $scope.currentState;
	};

	function getCurrentState() {
		for (state in $scope.states) {
			if ($scope.states.hasOwnProperty(state)) {
				if ($state.includes(state)) {
					$scope.currentState = state;
				}
			}
		}
		console.log('haha', $scope.currentState);
	}
}])
.directive('myHeader', function() {
	return {
		templateUrl: "app/header/my-header.html",
		controller: 'headerController'
	};
});