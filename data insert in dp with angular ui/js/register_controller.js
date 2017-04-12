var app = angular.module('myapp');
app.controller('register_controller',["$scope","$http",function($scope,$http) {
	

	

	$scope.save_details=function (){
		
		$http({
        url: 'http://localhost:5000/register',
        method:'POST',
        data : $scope.user,
        dataType: 'application/json'
        }).success(function(res) {
			
			if (res!= null) {
				console.log('response received');
			}
		}).error(function(res) {
			console.log(JSON.stringify("response fails", res));
		});
			$scope.user="";
		
	}
	$scope.clear=function (){
		$scope.user="";
	}

 }]);
