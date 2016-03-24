angular.module('restaurantFinderApp', ['ui.router', 'geolocation']).config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './templates/homeTemplate.html',
			controller: 'userCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: '',
			controller: ''
		})
		.state('user', {
			url: '/user/:id',
			templateUrl: '',
			controller: ''
		})
		.state('favorites', {
			url: '/favorites/:id',
			templateUrl: '',
			controller: ''
		})
		.state('restaurant', {
			url: '/restaurant',
			templateUrl: './templates/restaurantTemplate.html',
			controller: 'userCtrl',
		})
	
	$urlRouterProvider.otherwise('/');
})