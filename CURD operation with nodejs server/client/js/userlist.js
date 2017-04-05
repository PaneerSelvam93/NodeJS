var app = angular.module('myapp');
app.controller('userlist', [ "$scope", "$http","$location","$route",function($scope, $http,$location,$route) {

	
	$scope.valuereturn =[];
	$http({
			url : 'http://localhost:3000/userlist',
			data : angular.toJson(),
			method : 'POST',
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			}
		}).success(function(res) {
			
			$scope.valuereturn = res;
			if (res!= null) {
			
			}
		}).error(function(res) {
			console.log(JSON.stringify("response fails", res));

		});
	
	$scope.deleterecord=function(d_index){
		$scope.ind=d_index;
		$scope.indexsend={"value":$scope.ind};
		console.log($scope.indexsend);		
		 $http({
			url : 'http://localhost:3000/deleterecord',
			method : 'POST',
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			},
			data : angular.toJson($scope.indexsend)
		}).success(function(res) {
			
			if (res!= null) {
				$route.reload();
			}
		}).error(function(res) {
			console.log(res);

		});
		
	}

	$scope.updaterecord=function(u_index){
		console.log(u_index);
		
	}

}]);