var app = angular.module('myapp');
app.controller('clientside', [ "$scope", "$http","$location",function($scope, $http,$location) {
		 

		 	var s = $scope;
			var hp = $http;			

s.send=function(){
	
    $http({
        url: 'http://localhost:3000/namesave',
        method:'POST',
        data : angular.toJson($scope.user),
        dataType: 'application/json'
        }).success(function(res) {
			
			if (res= null) {
				console.log("send Successful");
			}
		}).error(function(res) {
			console.log(JSON.stringify("response fails", res));
		});

		$scope.user="";
}

	
} ]);
