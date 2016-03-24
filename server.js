//EXPRESS//
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var session = require('express-session');


//MONGOOSE//
var mongoose = require('mongoose');
var mongoUri = 'mongodb://admin:admin@ds021299.mlab.com:21299/users';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log('Connection to mongoDB successful');
})

//RUN EXPRESS & MONGOOSE//
var app = express();
//var db = mongoose();

app.use(cors());
app.use(bodyParser.json());
//app.use(session({secret: 'secrets'}));

//ROUTES//




//CONNECT TO FRONT END//
app.use(express.static(__dirname + '/public'));

//PORT//
var port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log('Listening on port ' + port);
})

