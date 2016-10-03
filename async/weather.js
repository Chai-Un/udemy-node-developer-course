var request = require('request');

var apiKey = 'e2cac73b15943c192519aba540aee144';

module.exports = function(location, callback) {
	var encodedLocation = encodeURIComponent(location);
	if (!encodedLocation) {
		return callback('No location for fetching weather');
	}
	var url = ('http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + 
	'&q=' + encodedLocation + '&units=metric');

	request({url: url, json: true}, function(error, response, body) {
		if (error) {
			callback('Unable to fetch weather');
		} else {
			callback(JSON.stringify(body, null, 4));
			// The temperature in Rotterdam
			callback('The temperature in ' + body.name + 
				' is ' + body.main.temp + ' celcius.');
		}
	});
	console.log('Got weather!');
}