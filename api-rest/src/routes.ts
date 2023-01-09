import ClientController from "./controllers/ClientController";
import { Router } from "express";
const routes = Router();
import jwt from 'jsonwebtoken';

// rotas de autenticação
routes.post('/client', ClientController.create);
routes.get('/client', ClientController.show);
routes.put('/client/:id', ClientController.update);
routes.delete('/client/:id', ClientController.delete);
routes.get('/client/:id', ClientController.index);

routes.post('/login', (req, res) => {
    // Check the username and password
    if (req.body.username === 'desafiosharenergy' && req.body.password === 'sh@r3n3rgy') {
        // If the username and password are correct, generate a JWT
        const token = jwt.sign({
            user: 'desafiosharenergy'
        }, process.env.SECRET_KEY || "secret");

        // Return the JWT to the client
        res.json({
            token
        });
    } else {
        // If the username or password is incorrect, return an error
        res.status(401).json({
            error: 'Invalid username or password'
        });
    }
});

export default routes;