var Todo = require('../data/todos');

module.exports = {
    index,
    create,
    delete : deleteTodo,
};

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/');
}

function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/');
}

function index(req, res) {
    res.render('index', {
       todos: Todo.getAll()
    });
}