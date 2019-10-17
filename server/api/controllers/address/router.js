import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/getnewaddress', controller.getNewAddress)
  .post('/sendtoaddress', controller.sendToAddress);
