
app.controller('register_controller',["$scope","$http","user_service",function($scope,$http,user_service) {
	
	if(user_service.service_var!=null){
		
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
	else{
	

		$scope.save_details=function (){
		
			$http({
        	url: 'http://localhost:5000/register',
       	 	method:'POST',
        	data : $scope.user,
        	dataType: 'application/json'
        	}).success(function(res) {
			
				if (res!= null) {
				
				}
			}).error(function(res) {
				console.log(JSON.stringify("response fails", res));
			});
				$scope.user="";
		
		}
		$scope.clear=function (){
			$scope.user="";
		}
	}
	$scope.update_details=function(){
		
		$http({
			url : 'http://localhost:5000/update/?num='+user_service.service_var,
			method : 'POST',
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			}
		}).success(function(res) {
			
			
			if (res!= null) {
				
						
			}
		}).error(function(res) {
			console.log("response fails", res);

		});
	}
 }]);
