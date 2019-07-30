const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

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
		handler(argv) {
		notes.removeNote(argv.title);
	}
})

yargs.command({
	command: 'list',
	describe: 'like dude it\'s a list ok?',
	handler() {
		notes.listNotes();
	}
})

yargs.command({
	command: 'read',
	describe: 'like dude you can read your effin notes here',
	builder: {
		title: {
			describe: 'Ok the read command dude',
			demandOption: true,
			type: 'string'
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
})


yargs.parse()
