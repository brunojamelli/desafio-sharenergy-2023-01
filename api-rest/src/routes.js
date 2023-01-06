const ClientController = require('./controllers/ClientController');

const express = require('express');
const routes = express.Router();
// rotas de autenticação
routes.post('/client', ClientController.post);
routes.get('/client', ClientController.get);
routes.put('/client/:id', ClientController.put);
routes.delete('/client/:id', ClientController.delete);
routes.get('/client/:id', ClientController.getById);
module.exports = routes;