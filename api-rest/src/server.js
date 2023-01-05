// const express = require('express');
// const cors = require('cors');
// const app = express();
 
// app.use(cors());
// app.use(express.json());
// const { logger } = require('./logger')
// require('dotenv/config');

// logger.info(`running on port: ${process.env.PORT}`);
// app.listen(3000);

const app = require('./app');
const { logger } = require('./logger')
require('dotenv/config');

logger.info(`running on port: ${process.env.PORT}`);
app.listen(process.env.PORT || 3333);