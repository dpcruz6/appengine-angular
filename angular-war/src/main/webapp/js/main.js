var app = angular.module('sampleApp', 
		['ngRoute',
		 'ngAnimate',
		 'controllers']);

app.config(['$routeProvider', 
    function($routeProvider){
		$routeProvider.when('/home',{
			templateUrl : 'views/main.html',
			controller : 'MainCtrl'
		}).when('/examples',{
			templateUrl : 'views/examples.html',
			controller : 'ExamplesCtrl'
		}).when('/about',{
			templateUrl : 'views/about.html',
			controller : 'AboutCtrl'
		}).when('/contact', {
			templateUrl : 'views/contact.html',
			controller : 'ContactCtrl'
		}).otherwise({
			redirectTo: '/home'
		});
	}
]);
