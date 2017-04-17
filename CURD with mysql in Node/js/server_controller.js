

var Sequelize = require('sequelize');
var sequelize = require('../db_config.js');
// model definition
    var users = sequelize.define("users", {u_name: Sequelize.STRING, u_id: Sequelize.STRING ,u_mobile: Sequelize.STRING, u_address: Sequelize.STRING});

module.exports.register=function(req,res){
	
	
	
 
	//sync the model with the database
	sequelize.sync({ force:false  }).then(function(err) {
    	// insert new user
    	users.create({
        	u_name     : req.body.name,
        	u_id       : req.body.id,
            u_mobile   : req.body.mobile,
            u_address  : req.body.address
    	}).then(function(user) {
        	// you can now access the newly created user via the variable user
        	res.send("...");
      
    	});

	});

}

module.exports.user_view=function(req,res){
   
    users.findAll({}).then(function (data,err) {
    
        if(data){
            
            res.send(data);
        }
        else{
            console.log(' error:',JSON.stringify(err));
        }
    });

    
}

module.exports.deleterecord=function(req,res){
    var temp= req.query.num;
   
    users.find({where: {u_id: temp }}).then(function (data,err) {
    
        if(data){
            
            data.destroy({}).then(function (data,err) {
                if(data){
                    res.send("reload");
                }
                else{
                    console.log('work 2 :',err);
                }
            })
        }
        else{
            console.log(' error:',JSON.stringify(err));
        }
    });
}
module.exports.one_user_list=function(req,res){

    users.findAll({where:{u_id:req.query.num}}).then(function (data,err) {
    
        if(data){
            
            res.send(data);
            
        }
        else{
            console.log(' error:',JSON.stringify(err));
        }
    });
    
}

module.exports.update=function(req,res){

    var temp= req.query.num;
   
    Item.find({where:{name:'Laptop'}}).complete(function (err, data) {

    
        if(data){
            data.updateAttributes({
            u_name:'Computer',
            u_id:'Computer',
            u_mobile:'Computer',
            u_address:'Computer'
        }).success(function (data1) {
            console.log(data1);
        })
        if(err){

        }
    }
});
    
}
