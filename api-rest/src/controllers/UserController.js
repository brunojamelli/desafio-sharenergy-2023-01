const {logger} = require('../logger');
exports.post = (req, res, next) => {
    logger.info("pooost");
    res.status(201).send('Rota POST!');
 };
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    logger.info("puuts");
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
 };
  
 exports.get = (req, res, next) => {
    logger.info("geet");
    res.status(200).send('Rota GET!');
 };