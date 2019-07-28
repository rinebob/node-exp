// created in lecture 18

const fs = require('fs');

// const book = {
// 	title: 'Hey Title of My Book',
// 	author: 'rinebob'
// }

// const bookJSON = JSON.stringify(book)
// const parsedData = JSON.parse(bookJSON);

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-JSON.json', bookJSON)

// challenge
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log('name: ',data.name);

data.name = 'rinebob';
data.planet = 'Mars';
data.age = 33;
data.cool = 'yes'

console.log('data: ',data);

const rinebobJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', rinebobJSON);

// {"name":"Andrew","planet":"Earth","age":27}