var todos = [
    {todo: 'Take out the trash', done: false},
    {todo: 'walk the dog', done: true},
];

module.exports = {
    create,
    getAll,
    deleteOne,
    // getOne
};

// function getOne(id) {
//     return todos[id];
// }

function deleteOne(id) {
    todos.splice(id, 1)
}

function getAll() {
    return todos;
}

function create(todo) {
    todos.push(todo);
}