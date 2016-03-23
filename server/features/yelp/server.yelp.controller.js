var Yelp = require('yelp');

module.exports = {
	getInfo: function(req, res, next) {
		var yelp = new Yelp({
			consumer_key: 'S6fijQ_5NRy-o6WGmNF6dw',
			consumer_secret: 'pJWUT7htQICuAWM4qJgfvC3UCbw',
			token: '7o6dqrzbR0WbW5LM2k5Z7AfWwXYEQknM',
			token_secret: 'cIBRTfEPo7UDo9ZylD6WGCV6Mb0',
		});

		yelp.search({ term: 'food', location: 'Montreal' })
			.then(function (data) {
			console.log(data);
			res.status(200).json(data);
		})
			.catch(function (err) {
			console.error(err);
		});
	}
}