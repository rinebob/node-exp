const request = require('request');

const geocode = (address, callback) => {
	const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmluZWJvYiIsImEiOiJjanl5bnRvOTYwMHZ3M290ZWVzZ3E5dHhrIn0.O66H1UE64GrhStoiV7jRDA&limit=1';

	request({url: geoUrl, json: true },(error, response) => {
		if (error) {
			callback('Unable to connect dude...')
		} else if (!response.body.features) {
			callback('Dude you didn\'t enter a search term...', undefined)
		} else if (response.body.features.length === 0) {
			callback('Unable to find location dude... try again maybe...', undefined)
		} else {
			const data = response.body.features[0];
			callback(undefined, {
				place: data.place_name,
				lat: data.center[1],
				long: data.center[0]
			})
		}
	})
}

module.exports = geocode;