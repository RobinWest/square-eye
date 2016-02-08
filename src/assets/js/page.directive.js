'use strict';

angular
	.module('SquareEye', [])
	.directive('squareEye', ['videoService', function(videoService){
		return {
			restrict: 'E',
			scope: false,
			template: '<div>something</div>',
			controller: function($scope, $element, $attrs){
				console.log('----');
				console.log($element);
				console.log(videoService);
			}
		}
	}])
;