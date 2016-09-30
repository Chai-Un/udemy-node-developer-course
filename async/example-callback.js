var request = require('request');

var apiKey = 'e2cac73b15943c192519aba540aee144';
var encodedLocation = 'Rotterdam';
var url = ('http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + 
	'&q=' + encodedLocation + '&units=metric');

request({url: url, json: true}, function(error, response, body) {
	if (error) {
		console.log('Unable to fetch weather');
	} else {
		console.log(JSON.stringify(body, null, 4));
		// The temperature in Rotterdam
		console.log('The temperature in ' + body.name + 
			' is ' + body.main.temp + ' celcius.');
	}
});
console.log('After the request method.');
