import TransactionService from '../../services/transaction.service';

export class Controller {
  async getTransaction(req, res) {
    try {
      let transaction = await TransactionService.getTransaction(req.body.txid);
      if (transaction) res.json(transaction.data);
      else res.status(404).end();
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new Controller();
