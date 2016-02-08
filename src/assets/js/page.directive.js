'use strict';

angular
	.module('SquareEye', [])
	.directive('squareEye', function(videoService){
		return {
			restrict: 'E',
			scope: false,
			template: '<div>something</div>',
			controller: function($scope, $element, $attrs){

				$scope.init = function(){
					var id;

					$scope.load(id);
				};

				$scope.load = function(id){
					var promise = videoService.get();

					promise.then(function(data){
						// TODO make a model for this crazy data
						console.log(data);
					});
				}
			}
		}
	})
;