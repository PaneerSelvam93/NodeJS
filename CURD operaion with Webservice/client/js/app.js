var app = angular.module('myapp', [ 'ngRoute' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/welcome.html',
		controller : "clientside"
	}).when('/next', {
		templateUrl : 'views/new.html',
		controller : "clientside"
	}).when('/userlist',{
		templateUrl : 'views/userview.html',
		controller : "userlist"
	});
} ]);
