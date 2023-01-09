import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
// // Create an interface for the Request object with a user property
// interface AuthenticatedRequest extends Request {
//     user: object;
// }
export default {
    auth(req: Request, res: Response, next: NextFunction) {
        // Get the JWT from the request header
        const token = req.headers.authorization;
        const secret = process.env.SECRET || '';

        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

        jwt.verify(token, secret, function (err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

            // se tudo estiver ok, salva no request para uso posterior
            req.user = decoded as object;
            next();
        });
    }
}