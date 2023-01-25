const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const user = await User.findOne({ email });

  if (user) {
    return response.status(400).json({ error: 'El email ya esta utilizado.' });
  }

  if (!(name && email && password)) {
    return response.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  const saltRounds = 10;

  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    name,
    email,
    passwordHash
  });

  const savedUser = await newUser.save();

  return response.status(201).json(savedUser);

});

module.exports = usersRouter;