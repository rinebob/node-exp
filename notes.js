const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes);
		console.log(chalk.green.inverse("note added"));
	} else {
		console.log(chalk.red.inverse('Note title already exists in notes! doooohhhh!!!!'));
	}
}

const readNote = (title) => {
	const notes = loadNotes();
	const foundNote = notes.find((note) => note.title === title);
	// console.log("foundNote: ",foundNote);
	if (foundNote) {
		console.log(chalk.blue.bold("YO DUDE", foundNote.title,"IS FOUND MAN!"));
		console.log("Body: ", foundNote.body);
	} else {
		console.log(chalk.red.bold("Sorry dude,",title,"not found..."));
	}

}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (error) {
		// console.log("error: ", error);
		return [];
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}


const removeNote = (title) => {
	console.log("title for removal: ",title)
	const notes = loadNotes();
	const otherNotes = notes.filter((note) => note.title !== title);
	if (notes.length > otherNotes.length) {
		console.log(chalk.bold.green.inverse("Note found dude!"));
		saveNotes(otherNotes);
	} else {
		console.log(chalk.bold.red.inverse("Note like not even found dude!"));
	}
}

const listNotes = () => {
	console.log(chalk.white.bold("Your effin notes dude"));
	const notes = loadNotes();
	notes.forEach((note) => {
		console.log(chalk.green.bold("Title: ", note.title));
	})
}


module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}