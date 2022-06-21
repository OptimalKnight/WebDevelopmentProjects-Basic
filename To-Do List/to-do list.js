let input = prompt("What would you like to do?");
const toDo = [];
while (input !== 'quit') {
    if (input === 'new') {
        const newToDo = prompt("Enter the task to be added to the list: ");
        toDo.push(newToDo);
        console.log(`${newToDo} added to the list!`);
    }
    else if (input === 'delete') {
        let ind = parseInt(prompt("Enter the index of the task you want to delete: "));
        while (!ind || ind < 1 || ind > toDo.length) {
            ind = parseInt(prompt("Invalid index! Please enter a valid index number: "));
        }
        console.log(`Task ${toDo[ind - 1]} deleted from the list!`);
        toDo.splice(ind - 1, 1);
    }
    else if (input === 'list') {
        console.log("**********");
        for (let i = 0; i < toDo.length; i++) {
            console.log(`   ${i + 1}: ${toDo[i]}`);
        }
        console.log("**********");
    }
    input = prompt("What would you like to do?");
}
console.log("You decided to quit the app.");