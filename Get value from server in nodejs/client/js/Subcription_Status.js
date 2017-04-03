/*var app = angular.module('myapp');
subcription.controller('Subcription_Status', [ "$log", "$scope", "$http", "$location", function($log, $scope, $http, $location) {
	var s = $scope;
	var hp = $http;

	s.details = {
		id : ''
	};
	s.submitdetails = function(req,res) {
		console.log("Ajax call ---to----nodejs server ");
		console.log(s.details.name);
		$http({
			url : 'http://localhost:3000/subcription_status',
			data : angular.toJson(s.details),
			method : 'POST',
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			}
		}).success(function(res) {
			console.log(JSON.stringify(res));
			if (res!= null) {
				s.details = res;
				console.log(JSON.stringify(res));
				$location.url('/subcription_status');
				console.log("SUbcription Successful");
			}
		}).error(function(res) {
			console.log(JSON.stringify("response fails", res));
		});
	}
} ]);*/
