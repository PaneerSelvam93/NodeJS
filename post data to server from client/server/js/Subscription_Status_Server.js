
var userdetails =[];
module.exports.subcription_status=function(req,res){
	console.log("To check Subscription  status");
	
	var user="panner";

	res.send(user);
}

module.exports.namesave=function(req,res){
	var savelist=req.body.name;

	
	var user={
		name : req.body.name,
		id : req.body.id,
		mobile : req.body.mobile,
		address : req.body.address
	}
	//console.log(" Name:",user.name+" id:",user.id+" mobile:",user.mobile+" address:",user.address);

		res.send(savelist);

		
	userdetails.push(user);
	console.log("this is new value from array ",userdetails );		

}

module.exports.userlist=function(req,res){

	res.send(userdetails);

}