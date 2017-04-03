

module.exports.subcription_status=function(req,res){
	console.log("To check Subscription  status");
	console.log("Id u have passed---",req.body.id);

	var user=["1","2","3"];

	res.send(user);
}