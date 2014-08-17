(function(){
  'use strict';

  angular.module('myApp', []).directive('makeEditable', function(){
    return {
      templateUrl: 'make-editable-template.html',
      restrict: 'A',
      scope: true,
      transclude: true,
      link: function($scope, element, attr){
        $scope.editing = false;
        $scope.buttonText = 'edit';
        $scope.toggleEdit = function(){
          if($scope.editing === false){
            $scope.editing = true;
            $scope.buttonText = 'save';
          } else {
            $scope.editing = false;
            $scope.buttonText = 'edit';
          }
        };
      }
    };
  });
}());
