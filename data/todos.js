var todos = [
    {todo: 'Take out the trash', done: false},
    {todo: 'walk the dog', done: true},
];

module.exports = {
    create,
    getAll,
    deleteOne,
};

function deleteOne(id) {
    todos.splice(id, 1)
}

function getAll() {
    return todos;
}

function create(todo) {
    todo.push(id, 1);
}