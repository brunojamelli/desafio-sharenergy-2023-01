import ClientController from "./controllers/ClientController";
import UserController from "./controllers/UserController";
import Authentication from "./middlewares/Authentication";
import { Router, Request, Response } from "express";
const routes = Router();
// const auth: Authentication = new Authentication();

// rota de autenticação
routes.post('/login', UserController.login);
routes.get('/home', (req: Request, res: Response) => { return res.json("bem vindo") });
routes.post('/client', Authentication.auth, ClientController.create);
routes.get('/client', Authentication.auth, ClientController.show);
routes.put('/client/:id', Authentication.auth, ClientController.update);
routes.delete('/client/:id', Authentication.auth, ClientController.delete);
routes.get('/client/:id', Authentication.auth, ClientController.index);

export default routes;