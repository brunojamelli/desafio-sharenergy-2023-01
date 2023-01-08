import { logger } from '../logger';
import { Request, Response } from 'express';
import Client from "./../models/client";

export default {
   async create(req: Request, res: Response) {
      const { name, email, phoneNumber, cpf } = req.body;
      const newClient = new Client({
         name, email, phoneNumber, cpf
      })
      await newClient.save();
      logger.info(`client saved \n ${newClient}`)
      res.status(201).send(newClient);
   },

   async update(req: Request, res: Response) {
      const { name, email, phoneNumber, cpf } = req.body;
      logger.info(req.params.id);
      const updatedClient = await Client.findByIdAndUpdate(req.params.id, { name, email, phoneNumber, cpf }, { new: true });
      logger.info(`client updated \n ${updatedClient}`)
      res.send(updatedClient);
   },

   async delete(req: Request, res: Response) {
      let id = req.params.id;
      const erasedClient = await Client.findByIdAndDelete(id);
      logger.info(`client erased \n ${erasedClient}`)
      res.status(200).send(erasedClient);
   },

   async show(req: Request, res: Response) {
      let clients = await Client.find();
      res.status(200).send(clients);
   },

   async index(req: Request, res: Response) {
      let idClient = req.params.id;
      let searchedClient = await Client.findById(idClient).exec();
      logger.info(`searched client \n ${searchedClient}`);
      res.status(200).send(`cliente ${idClient} \n com os dados:\n ${searchedClient}`);
   }
}