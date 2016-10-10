var request = require('request');

var apiKey = 'e2cac73b15943c192519aba540aee144';

module.exports = function (location) {
	return new Promise(function(resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		if (!encodedLocation) {
			return reject('No location for fetching weather');
		}
		var url = ('http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + 
		'&q=' + encodedLocation + '&units=metric');

		request({url: url, json: true}, function(error, response, body) {
			if (error) {
				reject('Unable to fetch weather');
			} else {
				resolve('The temperature in ' + body.name + 
					' is ' + body.main.temp + ' celcius.');
			}
		});
	});
}