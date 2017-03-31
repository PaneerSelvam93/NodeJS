/*var express = require('express'),
app = express();
/*app.get('/',function(req,res){
	console.log('work');
	res.sendfile(__dirname + '/index.html');
});*/



/*var route = angular.module('curd',['ngRoute']);

	route.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'index.html',
		controller : "index-controller"
	}).when('/input.html', {
		templateUrl : 'views/input.html',
		controller : "input-controller"
	}).otherwise({
		redirectTo : 'index.html'
	});
} ]);*/


/*
//app.use('/js',express.static(__dirname+'/client/js'));

app.listen(3000,function(){
	console.log('Im listening... in  3000');
})*/



'use strict';

// Declare app level module which depends on views, and components
var route angular.module('curd', ['ngRoute',]);

route.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'index.html',
		controller : "index-controller"
	});
} ]);