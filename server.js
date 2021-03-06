'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');
var productsCtrl = require('./apis/controllers/productsCtrl')
var configDB = require('./apis/config/database.js');
var port = 1337;

console.log('configDB.url', configDB.url)
mongoose.connect('mongodb://localhost:27017/GoldenMorningStore');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+'/public'));


require('./routes.js')(app);

app.listen(port, function(){
	console.log('now listening on port ' + port);
});