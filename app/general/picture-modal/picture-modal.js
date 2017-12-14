angular.module('suzieApp').directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      img: '@'
    },
    replace: true,
    link: function(scope, element, attrs) {
      scope.hideModal = function() {
        $('#modal-' + img).modal('hide');
      };
    },
    templateUrl: 'app/general/picture-modal/picture-modal.html'
  };
});