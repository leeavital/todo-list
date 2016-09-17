var ADD_TODO = "add-todo";
function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo: todo
    };
}
exports.addTodo = addTodo;
