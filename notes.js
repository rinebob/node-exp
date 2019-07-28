const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
	return "your effin notes dude";
}

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => note.title === title);
	if (duplicateNotes.length === 0) {
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

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
}