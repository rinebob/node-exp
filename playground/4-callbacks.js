// setTimeout(() => {
// 	console.log('Dude your 2 seconds are up...')
// }, 2000)

// const names = ['Dweezil', 'Moonunit', 'rinebob']
// const shortNames = names.filter((name) => {
// 	return name.length <= 7;
// })

// const geocode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			latitude: 10,
// 			longitude: 10
// 		}
// 		callback(data)
// 	},2000)
	
// }

// geocode('San Jose', (data) => {
// 	console.log('data: ',data);
// })

const add = (num1, num2, callback) => {
	setTimeout(() => {
		const sum = num1 + num2;
		callback(sum)
		// callback(num1 + num2);
	}, 2000)
}


add(1, 4, (sum) => {
    console.log('Sum: ',sum) // Should print: 5
})