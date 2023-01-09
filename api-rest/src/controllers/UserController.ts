import { logger } from '../logger';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default {
    async login(req: Request, res: Response) {
        if (req.body.username === 'desafiosharenergy' && req.body.password === 'sh@r3n3rgy') {
            // If the username and password are correct, generate a JWT
            const token = jwt.sign({
                user: 'desafiosharenergy'
            }, process.env.SECRET || "secret");

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
    }
}