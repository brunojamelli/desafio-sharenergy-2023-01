import { logger } from '../logger';
import { Request, Response } from 'express';
export default {
   async create(req: Request, res: Response, next) {
      logger.info("pooost");
      res.status(201).send('Rota POST!');
   },

   async update(req: Request, res: Response) {
      let id = req.params.id;
      logger.info("puuts");
      res.status(201).send(`Rota PUT com ID! --> ${id}`);
   },

   async delete(req: Request, res: Response) {
      let id = req.params.id;
      res.status(200).send(`Rota DELETE com ID! --> ${id}`);
   },

   async show(req: Request, res: Response) {
      logger.info("geting client");
      let clients = [
         { name: "miguel rogriges", age: 32 },
         { name: "julho dos santos", age: 41 },
         { name: "felipe caicedo", age: 24 },
         { name: "martin silva", age: 37 },
         { name: "nicolas capasso", age: 21 }

      ];
      res.status(200).send(clients);
   },

   async index(req: Request, res: Response) {
      let id = req.params.id;
      res.status(200).send(`Rota GET com ID! ${id}`);
   }
}