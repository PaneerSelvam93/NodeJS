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
	
	//res.sendfile('views/welcome.html');
	//console.log("-----> ",__dirname)
	res.sendfile(__dirname + '/index.html');
});

app.get('/next', function(req, res) {
	res.sendfile( __dirname + '/index.html');
});

app.post('/subcription_status', controller.subcription_status);

app.listen(3000, function(req, res) {
	console.log("Now U Can Access me on http://localhost:3000/ url");
});