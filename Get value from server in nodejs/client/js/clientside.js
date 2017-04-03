var app = angular.module('myapp');
app.controller('clientside', [ "$scope", "$http","$location",function($scope, $http,$location) {
		 console.log("inside the client js");

		 	var s = $scope;
			var hp = $http;

			s.details = {"id":"name"};
		
	
		console.log("Ajax call ---to----nodejs server ");
		console.log(s.details);
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
				//$location.url('/subcription_status');
				console.log("Subcription Successful");
			}
		}).error(function(res) {
			console.log(JSON.stringify("response fails", res));
		});




	
} ]);
