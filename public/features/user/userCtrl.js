angular.module('restaurantFinderApp')
	.controller('userCtrl', function($scope, geolocation, $state, $rootScope) {
	
	
		$scope.randomPlace = {};
	
		$scope.getSearchParams = function() {
			
			$scope.request.distance = getMeters($scope.request.distance);
			console.log($scope.request);
			$state.go('restaurant')
			$scope.getLocation();
		}
		
		function getMeters(i) {
			var meters = i*1609.344;
			return meters.toString();
		}
		
		
		
		$scope.restaurantMap = false;
		$scope.restaurantInfo = true;
	
		$scope.showMap = function() {
			$scope.restaurantInfo = false;
			$scope.restaurantMap = true;
		};
		
		$scope.showInfo = function() {
			$scope.restaurantMap =false;
			$scope.restaurantInfo = true;
		}
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	var map;
		
		$scope.getLocation = function () {
			$scope.coords = geolocation.getLocation().then(function (response){
				console.log(response);
				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: response.coords.latitude, lng: response.coords.longitude}, 
					zoom: 14
				});
				$scope.map = map;
				console.log(map);
				
				$scope.pos = {
					lat: response.coords.latitude,
					lng: response.coords.longitude
				}
				
				$scope.latLng = new google.maps.LatLng(response.coords.latitude, response.coords.longitude);
				
				console.log($scope.latLng);
				
				var myLocation = new google.maps.Marker({
					position: $scope.pos,
					map: map,
					title: "My Location",
					icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
				});
				
				myLocation.setPosition($scope.pos);
				
				var infoWindow = new google.maps.InfoWindow({
					content: '<div class="infoWindow">You are Here</div>'
				});
				
				google.maps.event.addListener(myLocation, 'click', function(){
					infoWindow.open(map, myLocation)
				});
				
				var request = {
					location: $scope.latLng,
					radius: $scope.request.distance,
					types: ['restaurant', 'bar', 'bakery', 'cafe'],
					query: $scope.request.keyword,
				}
				
				
				var foodOptions = new google.maps.places.PlacesService(map);
			    foodOptions.textSearch(request, callback);
				
				
				
				function callback(results, status) {
					if(status == google.maps.places.PlacesServiceStatus.OK) {
						var result = results[Math.floor(Math.random()*results.length)];
						console.log(result);
						createMarker(result);
						$rootScope.randomPlace = result;
						console.log($scope.randomPlace);
					}
				}
			})
		}
		
		function createMarker (place) {
			var placeLoc = place.geometry.location;
			var marker = new google.maps.Marker({
				map: map,
				position: place.geometry.location
			})

			google.maps.event.addListener(marker, 'click', function() {
				var infowindow = new google.maps.InfoWindow();
				infowindow.setContent(place.name);
				infowindow.open(map, this);
			});
		}
		
		
	
	
})