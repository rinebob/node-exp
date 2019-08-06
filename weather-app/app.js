// THIS IS FOR THE WEATHER APP.  STARTING LEC 28 ASYNCHRONOUS PROGRAMMING
// NOT FOR EARLIER MATERIAL

const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'https://api.darksky.net/forecast/f93ec7aa6a3163a3add89b9ef4c17e5e/37.8267,-122.4233';
// // const url = 'https://api.darksky.net/forecast/f93ec7aa6a3163a3add89b9ef4c17e5e/37.8267,';

// request({ url: url, json: true }, (error, response) => {
// 	if (error){
// 		console.log('Yo - couldn\'t find the effin api dude')
// 		console.log('error: ', error)
// 	} else if (response.body.error) {
// 		console.log('Dude - unable to find the effin location!')
// 		console.log('error: ', response.body.error)
// 	} else {
// 		console.log('Yo dude - like here\'s the response man...')
// 		const data = response.body;
// 		console.log('Ok dude, here\'s some weather data.  It feels like',data.currently.apparentTemperature,'degrees out and the pressure is like',data.currently.pressure,'which looks like a lot but isn\'t really');
// 	}
	
// })

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmluZWJvYiIsImEiOiJjanl5bnRvOTYwMHZ3M290ZWVzZ3E5dHhrIn0.O66H1UE64GrhStoiV7jRDA&limit=1'


// request({url: geoUrl, json: true },(error, response) => {
// 	if (error) {
// 		console.log('Dude - LOW LEVEL ERROR!')
// 		console.log('error: ', error)
// 	} else if (response.body.error || !response.body.features) {
// 		console.log('Dude - error!')
// 		console.log('r.b.e: ', response.body.error)
// 	} else if (response.body.features.length === 0) {
// 		console.log('nothing found!')
		
// 	} else {
// 		console.log('Found it!  Life is good!')
// 		const geoData = response.body.features[0];
// 		const place = geoData.place_name;
// 		const lat = geoData.center[1];
// 		const long = geoData.center[0];
// 		console.log('Place name: ',place);
// 		console.log('lat: ',lat);
// 		console.log('long: ',long);
// 	}
// })


// geocode('Saratoga', (error, data) => {
// 	console.log('Error: ',error);
// 	console.log('Data: ',data);
// })

forecast(-75.7088, 44.1545, (error, data) => {
	console.log('Error', error)
	console.log('Forecast: ', data.forecast)
  })