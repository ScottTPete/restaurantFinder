var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
	name: {type: String, required true},
	rating: {type: String, required true},
	phoneNumber: {type: String, required true},
	
})