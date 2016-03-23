angular.module('restaurantFinderApp')
	.controller('restaurantCtrl', function ($scope, restaurantService) {
	
		$scope.getData = function() {
			restaurantService.getRestaurantData().then(function (response) {
				console.log(response);
			});
		};
		
		$scope.getData();
		$scope.test = "scott";
	
	
});