var app = angular.module('myapp', [ 'ngRoute' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {

		templateUrl : 'welcome.html',
		controller : 'welcome_controller'
		
	}).when('/register',{

		templateUrl : 'register.html',
		controller : 'register_controller'

	}).when('/list_view',{

		templateUrl : 'list_view.html',
		controller : 'list_view_controller'

	});
} ]);
