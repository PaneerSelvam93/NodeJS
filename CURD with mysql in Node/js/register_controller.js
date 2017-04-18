
app.controller('register_controller',["$scope","$http","user_service","$route","$location",function($scope,$http,user_service,$route,$location) {
	


	$scope.ngupdate=null;

	if(user_service.service_var!=null){
		$scope.ngupdate='in';

		$http({
			url : 'http://localhost:5000/one_user_list/?num='+user_service.service_var,
			method : 'POST',
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			},
			
		}).success(function(res) {
			//console.log('thia is res',res);
			
			
			
			$scope.user={
				'name':res.u_name,
				'id':res.u_id,
				'mobile':res.u_mobile,
				'address':res.u_address,
				}
				
			
			//console.log('thia is user',$scope.user);
			user_service.update_id=res.id;

			//console.log(user_service.update_id);
			
			if (res!= null) {
				//$route.reload();

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
		console.log($scope.user);

		$http({
			
			url : 'http://localhost:5000/update_record/?num='+user_service.update_id,
			method : 'PUT',
			data :$scope.user,
			headers : {
				"content-type" : "application/json",
				"Accept" : "application/json"
			},
			
		}).success(function(res) {
			
				
			if (res!= null) {
				user_service.service_var=null;
				$location.path('/list_view');
			}
		}).error(function(res) {
			

		});
	}
 }]);
