const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');
// const command = process.argv[2];

// if (command === 'add') {
// 	console.log('Adding an effin note dude!');
// } else if (command === 'remove') {
// 	console.log('Removing note dude!')
// }

// console.log(process.argv)


// yargs.version('1.1.0')
// console.log(yargs.argv.title)

yargs.command({
	command: 'add',
	describe: 'Add a new note dude',
	handler: function () {
		console.log('Adding a new note dude!');
	}
})

yargs.command({
	command: 'remove',
	describe: 'Ok remove the effin note dude',
	handler: function() {
		console.log('Yo like removing the freakin note dude')
	}
})

yargs.command({
	command: 'list',
	describe: 'like dude it\'s a list ok?',
	handler: function() {
		console.log('Hey now!  List List List dude...')
	}
})
yargs.command({
	command: 'read',
	describe: 'like dude you can read your effin notes here',
	handler: function() {
		console.log('Yo - dude can\'t you READ???')
	}
})

console.log(yargs.argv)