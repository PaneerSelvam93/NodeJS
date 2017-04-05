
var userdetails =[]; 
var delindex="";
module.exports.namesave=function(req,res){
	

	
	var user={
		name : req.body.name,
		id : req.body.id,
		mobile : req.body.mobile,
		address : req.body.address
	}
		
	userdetails.push(user);
	res.end();
}

module.exports.userlist=function(req,res){

	res.send(userdetails);

}

module.exports.deleterecord=function(req,res){
	var delindex=req.body.value;
	userdetails.splice(delindex, 1);
	res.end();
}
