// get dependencies
var app = require('express');
var Sequelize = require('sequelize');
var mysql = require('mysql');
var http = require('http');

 
// sequelize initialization
var sequelize = new Sequelize('seq_node', 'root', 'root', {host: 'localhost',port:3306,dialect: 'mysql'});

// check database connection
sequelize.authenticate().then(function(err) {
    if (err) {
      console.log('Unable to connect to the database:', err);
    } else {
      console.log('Connection has been established successfully.');
    }
});

// model definition
var user = sequelize.define("user", {username: Sequelize.STRING, password: Sequelize.STRING});
 
//sync the model with the database
sequelize.sync({ force: false }).then(function(err) {
    // insert new user
    user.create({
        username: "panner",
        password: "selvam"
    }).then(function(user) {
        // you can now access the newly created user via the variable user
        //console.log(user);
       /* user.find({
            where: { username: 'suresh' }
        }).then(function(suresh) {
            console.log('Hello ' + suresh.username + '!');
            console.log('All attributes of john:', suresh.values);
        });*/
    });
});

// initializing a port app.listen();

http.createServer(app).listen(5000);


