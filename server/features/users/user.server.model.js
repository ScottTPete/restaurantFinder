var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {type: String, required: true},
	dateUserCreated: {type: Date, default: new Date()},
	email: {type: String, required: true},
	age: {type: String, required: true},
	image: {type: String},
	password: {type: String, required: true},
	address: {type: String, required: true},
	favorites: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],,
	excludes: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
});

module.exports = mongoose.model('User', UserSchema);