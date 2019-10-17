import examplesRouter from './api/controllers/examples/router';
import addressRouter from './api/controllers/address/router';
import transactionRouter from './api/controllers/transaction/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/address', addressRouter);
  app.use('/api/v1/transaction', transactionRouter);
}
