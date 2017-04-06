var app = angular.module('myapp');
app.controller('userlist', [ "$scope", "$http","$location","$route","a_service",function($scope, $http,$location,$route,a_service) {

	$scope.temp="";
	$scope.valuereturn =[];
	
	
	$http({
			url : 'http://localhost:3000/userlist',
			data : angular.toJson(),
			method : 'GET',
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			}
		}).success(function(res) {
			
			
			if (res!= null) {
				$scope.valuereturn = res;
			}
		}).error(function(res) {
			console.log("response fails", res);

		});
	
	$scope.deleterecord=function(d_index){
		$scope.ind=d_index;
		$scope.indexsend={"value":$scope.ind};
		$http({
			url : 'http://localhost:3000/deleterecord',
			method : 'DELETE',
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

	$scope.editrecord=function(u_index){ 

		$scope.ind=u_index;
		$scope.u_indexsend={"value":$scope.ind};
		$http({
			url : 'http://localhost:3000/useredit',
			method : 'POST',
			data : angular.toJson($scope.u_indexsend),
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			}
			
		}).success(function(res) {
			$scope.temp=res;
			if (res!= null) {

				a_service.service_var=$scope.temp;
				
				$location.path('/next');
				
			}
		}).error(function(res) {
			console.log("response fails", res);

		});

		
	}



}])