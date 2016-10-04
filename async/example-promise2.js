function doWork() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('done!');
			resolve();
		}, 1000);
	});
}

doWork().then(function() {
	return doWork();
}).then(function() {
	console.log('all done!');
}, function() {
	
});