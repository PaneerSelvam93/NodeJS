

var Sequelize = require('sequelize');
var sequelize = require('../db_config.js');

module.exports.register=function(req,res){
	
	
		// model definition
	var users = sequelize.define("users", {u_name: Sequelize.STRING, u_id: Sequelize.STRING});
 
	//sync the model with the database
	sequelize.sync({ force: false }).then(function(err) {
    	// insert new user
    	users.create({
        	u_name : req.body.name,
        	u_id   : req.body.id
    	}).then(function(user) {
        	// you can now access the newly created user via the variable user
        	res.send("...");
      
    	});
	});

}
