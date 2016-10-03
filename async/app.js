var weather = require('./weather.js');
var location = require('./location.js');

// setup yargs for -location or -l
var argv = require('yargs')
	.option('location', {
		demand: false,
		alias: 'l',
		description: 'Location name goes here',
		type: 'string'
	})
	.help('help');
	.argv;

// location(function (location) {
// 	if (!location) {
// 		console.log('Unable to get location');
// 		return;
// 	} else {
// 		console.log('city: ' + location.city);
// 		console.log('long/lat: ' + location.loc);
// 	}
// });

// if location is provided 
//  call weather

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('location provided = ' + argv.l);
	weather(argv.l, function(currentWeather) {
		console.log(currentWeather);
	});
} else {
	console.log('location not provided! Trying to gues where you are..');
}
