// THIS IS FOR THE WEATHER APP.  STARTING LEC 28 ASYNCHRONOUS PROGRAMMING
// NOT FOR EARLIER MATERIAL

const request = require('request');

const url = 'https://api.darksky.net/forecast/f93ec7aa6a3163a3add89b9ef4c17e5e/37.8267,-122.4233';

request({ url: url }, (error, response) => {
	// console.log('response', response);
	const data = JSON.parse(response.body);
	// console.log('data: ', data.currently)
	console.log('Ok dude, here\'s some weather data.  It feels like',data.currently.apparentTemperature,'degrees out and the pressure is like',data.currently.pressure,'which looks like a lot but isn\'t really');
})

