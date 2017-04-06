var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var connection = require('express-myconnection');
app.use(bodyParser.json());
app.use(bodyParser.json({
	type : 'application/vnd.api+json'
}));
app.use(bodyParser.urlencoded({
	extended : true
}));
var controller = require('./server/js/Subscription_Status_Server.js');


var http = require("http");

app.use(express.static('client'));
app.use(express.static('supportFile'));

app.get('/', function(req, res) {
	
	res.sendfile(__dirname + '/index.html');
});

app.post('/namesave', controller.namesave);
app.get('/userlist', controller.userlist);
app.delete('/deleterecord', controller.deleterecord);
app.post('/useredit', controller.useredit);


app.listen(3000, function(req, res) {
	console.log("Now U Can Access me on http://localhost:3000/ url");
});