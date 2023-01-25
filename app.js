require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./controllers/users');
const morgan = require('morgan');
const cors = require('cors');
const loginRouter = require('./controllers/login');
const cookieParser = require('cookie-parser');
const userExtractor = require('./middlewares/auth');
const todosRouter = require('./controllers/todos');
const logoutRouter = require('./controllers/logout');
const { MONGO_URI } = require('./config');

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conecto a MongoDB');
  } catch (error) {
    console.log(error);
    console.log('No conecto a MongoDB');
  }
})();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Frontend routes            Rutas en el frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('img')));
app.use('/app/:id', express.static(path.resolve('views', 'app')));







//Midlerwares backend
app.use(morgan('tiny'));

// Backend routes
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/todos', userExtractor, todosRouter);
app.use('/api/logout', logoutRouter);

app.use('*', express.static(path.resolve('views', '404')));
module.exports = app;