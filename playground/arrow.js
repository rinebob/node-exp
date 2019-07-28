// const event = {
// 	name: 'Birthday Party',
// 	guestList: ['Andrew', 'Jen', 'Mike'],
// 	printGuestList() {
// 		console.log('Guest List For: ', this.name);

// 		this.guestList.forEach((guest) => {
// 			console.log(guest,'is attending',this.name,'dude!')
// 		})
// 	}

	
// }
// event.printGuestList();		// Guest List for: Birthday Party

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

	// getTasksToDo() {
	// 	const tasksToDo = this.tasks.filter((task) => {
	// 		console.log('task: ',task.text,' status: ',task.completed);
	// 		return task.completed === false;
	// 	})
	// 	return tasksToDo;
	// }

	getTasksToDo() {
		return this.tasks.filter((task) => task.completed === false)
	}
}

console.log(tasks.getTasksToDo())