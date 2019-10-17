import l from '../../common/logger';
import config from '../config/config';
import * as axios from 'axios';

const request = axios.default;

const options = { ...config.reqDefaults };

class TransactionService {
  async getTransaction(transaction) {
    l.info(`${this.constructor.name}.getTransaction(${transaction})`);

    options.data = {
      method: 'gettransaction',
      params: [transaction],
    };

    return await request(options);
  }
}

export default new TransactionService();
