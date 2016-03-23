angular.module('restaurantFinderApp')
		.service('restaurantService', function ($http, $q) {
																								

			this.getRestaurantData = function() {
				var deferred = $q.defer();
	
				$http({
					method: 'GET',
					url: '/api/restaurantTest'
				}).then(function(response) {
					deferred.resolve(response);
					
				})
				return deferred.promise;
			};





});