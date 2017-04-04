var app = angular.module('myapp');
app.controller('userlist', [ "$scope", "$http","$location",function($scope, $http,$location) {

	
	$scope.valuereturn = "";

	$http({
			url : 'http://localhost:3000/userlist',
			data : angular.toJson(),
			method : 'POST',
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			}
		}).success(function(res) {
			//console.log(JSON.stringify(res));
			$scope.valuereturn = res;
			if (res!= null) {
			
			}
		}).error(function(res) {
			console.log(JSON.stringify("response fails", res));
	});
	console.log($scope.valuereturn);

}]);