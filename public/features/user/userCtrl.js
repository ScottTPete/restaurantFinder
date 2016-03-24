angular.module('restaurantFinderApp')
	.controller('userCtrl', function($scope, geolocation, $state) {
	
		$scope.getSearchParams = function() {
			console.log($scope.request);
			console.log($scope.request.type);
			console.log($scope.request.rating);
			$state.go('restaurant')
		}
		
	/*	$scope.getSearchResult = function(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				for (var i = 0; i < results.length; i++) {
					var place = results[i];
					createMarker(results[i]);
				}
				console.log(results);
			}
		}*/
	
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
					radius: '5000',
					types: ['restaurant', 'bar', 'bakery', 'cafe'],
					rating: '5'
				}
				
				var foodOptions = new google.maps.places.PlacesService(map);
			    foodOptions.nearbySearch(request, callback);
				
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
				
				function callback(results, status) {
					if(status == google.maps.places.PlacesServiceStatus.OK) {
						console.log(results);
						for(var i=0; i <results.length; i++) {
							var place = results[i];
							createMarker(results[i]);
				
						}
					}
				}
			})
		}
		
		$scope.getLocation();
	
	
})