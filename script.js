//
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log("My todos", this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

// this is from version 2 
// function addTodo(todo) {
//     todos.push(todi);
//     displayTodos();
// }


// function changeTodo(position, newValue) {
//     todos[position] = newValue;
//     displayTodos();
// }


// function deleteTodo(position) {
//     todos.splice(position, 1);
//     displayTodos();
//}