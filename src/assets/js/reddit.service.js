'use strict';

angular
	.module('SquareEye')
	.service('videoService', ['$q', '$http', function($q, $http){
		var thing = {
			prop: 1,
			prop: 2
		};

		return thing;
	}])
;