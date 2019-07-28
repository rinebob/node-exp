const chalk = require('chalk');
const yargs = require('yargs');
// const getNotes = require('./notes.js');
const notes = require('./notes.js');
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
	builder: {
		title: {
			describe: 'Like note effin title dude',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: "Yo like this is the body of the new note dude.  I's like long...",
			demandOption: true,
			type: 'string'
		}
	},
	// handler: function (argv) {
	// 	notes.addNote(argv.title, argv.body);
	// }
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
})

yargs.command({
	command: 'remove',
	describe: 'Ok remove the effin note dude',
	builder: {
		title: {
			describe: 'Hey like title for removing dude',
			demandOption: true,
			type: 'string'
		},
	},
	// handler: function(argv) {
	// 	notes.removeNote(argv.title);
	// }
	handler(argv) {
		notes.removeNote(argv.title);
	}
})

yargs.command({
	command: 'list',
	describe: 'like dude it\'s a list ok?',
	// handler: function() {
	// 	console.log('Hey now!  List List List dude...')
	// }
	handler()  {
		console.log('Hey now!  List List List dude...')
	}
})
yargs.command({
	command: 'read',
	describe: 'like dude you can read your effin notes here',
	// handler: function() {
	// 	console.log('Yo - dude can\'t you READ???')
	// }
	handler() {
		console.log('Yo - dude can\'t you READ???')
	}
})

yargs.parse()
// console.log(yargs.argv)