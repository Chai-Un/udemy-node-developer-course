// function dowork(data, callback) {
// 	callback('done');
// }

// function doWorkPromise(data) {
// 	return new Promise(function(resolve, reject) {
// 		resolve('everything worked!');
// 	});
// }

// doWorkPromise('Some data').then(function(data) {
// 	console.log(data);
// })

var request = require('request');

function getWeather(location) {
	return new Promise(function(resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var apiKey = 'e2cac73b15943c192519aba540aee144';
			if (!encodedLocation) {
				return reject('No location for fetching weather');
			}
			var url = ('http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + 
			'&q=' + encodedLocation + '&units=metric');

			request({url: url, json: true}, function(error, response, body) {
				if (error) {
					reject('Unable to fetch weather');
				} else {
					resolve(JSON.stringify(body, null, 4));
					resolve('The temperature in ' + body.name + 
						' is ' + body.main.temp + ' celcius.');
				}
			});
			console.log('Got weather!');
	})
}

getWeather('new york').then(function(currentWeather) {
	console.log(currentWeather);
},function(error) {
	console.log(error);
});