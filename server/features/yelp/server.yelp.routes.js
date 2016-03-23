var yelpCtrl = require('./server.yelp.controller')

module.exports = function(app) {
	app.route('/api/restaurantTest')
	.get(yelpCtrl.getInfo)
}