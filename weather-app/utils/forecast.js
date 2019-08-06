const request = require('request');

const forecast = (lat, long, callback) => {
	// console.log('lat: ',lat,' long: ',long);
	
	const forecastUrl =  'https://api.darksky.net/forecast/f93ec7aa6a3163a3add89b9ef4c17e5e/' + lat + ',' + long;

	// console.log('request: ',forecastUrl);
	
	request({url: forecastUrl, json: true },(error, response) => {
		const data = response.body.daily;
		// console.log('daily: ',data.summary);
		if (error) {
			callback('Unable to connect dude...')
		} else if (!data) {
			callback('Dude you didn\'t enter a search term...', undefined)
		} else if (data.length === 0) {
			callback('Unable to find location dude... try again maybe...', undefined)
		} else {
			callback(undefined, {
				forecast: data.summary
			})
		}
	})
}

module.exports = forecast;