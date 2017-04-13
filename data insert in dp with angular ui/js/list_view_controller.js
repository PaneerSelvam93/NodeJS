
app.controller('list_view_controller',["$http","$scope","$route","user_service","$location",function($http,$scope,$route,user_service,$location) {

	$scope.valuereturn=[];

	$http({
			url : 'http://localhost:5000/userlist',
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

	$scope.edit_user=function(ind){
	
		user_service.service_var=ind;
		$location.path('/register');
		
	}
	$scope.delete_user=function(ind){

		$http({
			url : 'http://localhost:5000/deleterecord/?num='+ind,
			method : 'DELETE',
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			},
			
		}).success(function(res) {
			
			if (res!= null) {
				$route.reload();
			}
		}).error(function(res) {
			

		});
	}
}]);


