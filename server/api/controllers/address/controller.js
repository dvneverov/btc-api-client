import AddressService from '../../services/address.service';

export class Controller {
  async getNewAddress(req, res) {
    try {
      let address = await AddressService.getNewAddress(req.body.label);
      if (address) res.json({ address: address.data });
      else res.status(501).end();
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async sendToAddress(req, res) {
    try {
      let transaction = await AddressService.sendToAddress(
        req.body.address,
        req.body.amount
      );
      if (transaction) res.json({ txid: transaction.data });
      else res.status(501).end();
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new Controller();
