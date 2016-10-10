// function doWork() {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			console.log('done!');
// 			resolve();
// 		}, 1000);
// 	});
// }

// doWork().then(function() {
// 	return doWork();
// }).then(function() {
// 	console.log('all done!');
// }, function() {
	
// });

function getLocation() {
	return new Promise(function (resolve, reject) {
		resolve('Philadelphia');
	});
}

function getWeather(location) {
	return new Promise(function (resolve, reject) {
		resolve('It is 78 in ' + location + '!');
	});
}

getLocation().then(function (location) {
	return getWeather(location);
}).then(function(currentWeather) {
	console.log(currentWeather);
});