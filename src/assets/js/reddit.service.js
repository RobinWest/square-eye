'use strict';

angular
	.module('SquareEye')
	.service('videoService', function($q, $http){
		// TODO remove protocol
		var baseUrl = 'https://api.reddit.com/r/videos';

		var api = {
			get: function(args){
				var args = args || {};

				return $http.get(baseUrl, {
					params: args
				});
			}
		};

		return api;
	})
;