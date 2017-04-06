var app = angular.module('myapp');
app.controller('clientside', [ "$scope", "$http","$location","a_service",function($scope, $http,$location,a_service) {
		 
if(a_service.service_var!=null){

	$scope.user=a_service.service_var;
	a_service.service_var=null;
}
		 		

$scope.send=function(){
	
    $http({
        url: 'http://localhost:3000/namesave',
        method:'POST',
        data : angular.toJson($scope.user),
        dataType: 'application/json'
        }).success(function(res) {
			
			if (res!= null) {
				
			}
		}).error(function(res) {
			console.log(JSON.stringify("response fails", res));
		});

		$scope.user="";
}

	
}



 ]);
