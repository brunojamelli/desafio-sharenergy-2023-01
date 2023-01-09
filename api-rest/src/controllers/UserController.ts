import { logger } from '../logger';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

function generateAccessToken(user: String) {
    // expires after twenty minutes (1200 seconds = 20 minutes)
    return jwt.sign({ user }, process.env.SECRET || '', { expiresIn: 1200 });
}

export default {
    async login(req: Request, res: Response) {
        let username = req.body.username;
        if (req.body.username === 'desafiosharenergy' && req.body.password === 'sh@r3n3rgy') {
            let token = generateAccessToken(username);
            // Return the JWT to the client
            logger.info('login');
            res.status(201).json({
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