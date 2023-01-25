const todosRouter = require('express').Router();
const { request, response } = require('express');
const Todo = require('../models/todo');
// const User = require('../models/user');


todosRouter.post('/', async (request, response) => {
    const user = request.user;

    if (!user) {
        return response.sendStatus(401);
    }

    const { text } = request.body;

    if (!text) {
        return response.status(400).json({ error: 'El texto es requerido' });
    }

    const newTodo = new Todo({
        text,
        user: user._id
    });

    const savedTodo = await newTodo.save();

    user.todos = user.todos.concat(savedTodo._id);

    return response.status(201).json(savedTodo);
});


//extraer las tareas
todosRouter.get('/', async (request, response) => {
    const user = request.user;

    if (!user) {
        return response.sendStatus(401);
    }

    const todos = await Todo.find({ user: user.id });


    return response.status(200).json(todos);

});

todosRouter.delete('/:id', async (request, response) => {
    const user = request.user;

    if (!user) {
        return response.sendStatus(401);
    }
    await Todo.findByIdAndDelete(request.params.id);
    return response.sendStatus(204);


});

todosRouter.patch('/:id', async (request, response) => {
    const user = request.user;

    if (!user) {
        return response.sendStatus(401);
    }

    const { checked } = request.body;

    //const todoToUpdate = await Todo.findById(request.params.id);

    await Todo.findByIdAndUpdate(request.params.id, { checked });

    return response.sendStatus(200);

});






module.exports = todosRouter;