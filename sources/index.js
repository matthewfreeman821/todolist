var todos = [];//Initializes empty array to add todos

var input = prompt('What would you like to do? ');//Prompts user to input what they would like to do from the list generated in the html file

while (input !== 'quit') {//Allows the app to continue to prompt user until quit is entered
    if (input === 'list') {//Allows user to access the list of todos
        listTasks();
    } else if (input === 'new') {
        addTasks();
    } else if (input === 'delete') {
        removeTasks();
    }
    input = prompt('What would you like to do? ');
}
console.log('OK, you quit the app');

function listTasks () {
    console.log('***************')
    todos.forEach(function(todo, i) {
        console.log(i + ': ' + todo);
    });
    console.log('***************');
}

function addTasks() {
    var newTodo = prompt('Enter new task');
        todos.push(newTodo);
        console.log('Added Task');
}

function removeTasks () {
    var index = promot('Enter index of task to delete');
    todos.splice(index, 1);
    console.log('Deleted Task');
}