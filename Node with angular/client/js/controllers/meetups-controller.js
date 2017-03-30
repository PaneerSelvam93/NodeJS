
app.controller('meetupscontroller',['$scope','$resource',
	function($scope,$resource){

$scope.meetups= [
	{ name:"Panner"},
	{ name: "selvam"}
]
	$scope.creatmeetup=function(){
		$scope.meetups.push({name:$scope.meetupsname});
		$scope.meetupsname="";
	}	
}]);


