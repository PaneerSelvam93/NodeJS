// get dependencies
var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var mysql = require('mysql');
var http = require('http');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var controller = require('./js/server_controller.js');


app.use(express.static('js'));
app.use(express.static('views'));

app.get('/', function(req, res) {
    
    res.sendfile(__dirname + '/index.html');
});


app.post('/register', controller.register);
app.get('/userlist',controller.user_view);
app.delete('/deleterecord', controller.deleterecord);
app.post('/one_user_list',controller.one_user_list);
app.post('/update',controller.update);


// initializing a port app.listen();

http.createServer(app).listen(5000,function (req,  res){
    console.log('server runing in 5000 port');
});


