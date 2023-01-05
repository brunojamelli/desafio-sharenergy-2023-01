const UserController = require('./controllers/UserController');

const express = require('express');
const routes = express.Router();
// rotas de autenticação
routes.post('/user', UserController.post);
routes.get('/user', UserController.get);
module.exports = routes;