
var userdetails =[]; 
var delindex="";
var flag=null;
module.exports.namesave=function(req,res){
	
	if(flag!=null){

		userdetails.splice(delindex, 1);
		var user={
			name : req.body.name,
			id : req.body.id,
			mobile : req.body.mobile,
			address : req.body.address
		}
		
		userdetails.push(user);
		res.end();
		flag=null;

	}
	else{
		var user={
			name : req.body.name,
			id : req.body.id,
			mobile : req.body.mobile,
			address : req.body.address
		}
		
		userdetails.push(user);
		res.end();

	}
	
}

module.exports.userlist=function(req,res){

	res.send(userdetails);

}

module.exports.deleterecord=function(req,res){
	var delindex=req.body.value;
	userdetails.splice(delindex, 1);
	res.end();
}
module.exports.useredit=function(req,res){
	
	var num=req.body.value;
	res.send(userdetails[num]);
	flag=1;

}