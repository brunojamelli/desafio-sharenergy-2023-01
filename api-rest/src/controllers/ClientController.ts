import { logger } from '../logger';
import { Request, Response } from 'express';
import Client from "./../models/client";

export default {
   async create(req: Request, res: Response) {
      logger.info("pooost");
      const client = new Client({
         name: 'Bill',
         email: 'bill@initech.com'
      });
      await client.save();

      console.log(client.email);
      res.status(201).send(client);
   },

   async update(req: Request, res: Response) {
      const { name, email, phoneNumber, cpf } = req.body;
      logger.info(req.params.id);
      const updatedClient = await Client.findByIdAndUpdate(req.params.id, { name, email, phoneNumber, cpf }, { new: true });
      res.send(updatedClient);
      // res.status(201).send(`Rota PUT com ID! --> ${id}`);
   },

   async delete(req: Request, res: Response) {
      let id = req.params.id;
      const client = await Client.findByIdAndDelete(id);
      res.status(200).send(client);
   },

   async show(req: Request, res: Response) {
      let clients = await Client.find();
      res.status(200).send(clients);
   },

   async index(req: Request, res: Response) {
      let idClient = req.params.id;
      logger.info(idClient);
      let client = await Client.findById(idClient).exec();
      res.status(200).send(`cliente ${idClient} \n com os dados:\n ${client}`);
   }
}