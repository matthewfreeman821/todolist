var todos = [];

var input = prompt('What would you like to do? ');

while (input !== 'quit') {
    if (input === 'list') {
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