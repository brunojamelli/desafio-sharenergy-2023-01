import ClientController from "./controllers/ClientController";
import { Router } from "express";
const routes = Router();

// rotas de autenticação
routes.post('/client', ClientController.create);
routes.get('/client', ClientController.show);
routes.put('/client/:id', ClientController.update);
routes.delete('/client/:id', ClientController.delete);
routes.get('/client/:id', ClientController.index);
export default routes;