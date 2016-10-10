var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	.option('location', {
		demand: false,
		alias: 'l',
		description: 'Location name goes here',
		type: 'string'
	})
	.help('help')
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('location provided = ' + argv.l);
	weather(argv.l).then(function (currentWeather) {
		console.log(currentWeather);
	}).catch(function (error) {
		console.log(error);
	})
} else {
	console.log('location not provided! Trying to gues where you are..');
	location().then(function(loc) {
		return weather(loc.city);
	}).then(function(currentWeather) {
		console.log(currentWeather);
	}).catch(function(error) {
		console.log(error);
	});
}
