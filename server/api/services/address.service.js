import l from '../../common/logger';
import config from '../config/config';
import * as axios from 'axios';

const request = axios.default;

const options = { ...config.reqDefaults };

class AddressService {
  async getNewAddress(label = null) {
    l.info(`${this.constructor.name}.getNewAddress(${label})`);

    options.data = {
      method: 'getnewaddress',
      params: [],
    };

    return await request(options);
  }

  async sendToAddress(address, amount) {
    l.info(`${this.constructor.name}.getNewAddress(${address}, ${amount})`);

    options.data = {
      method: 'sendtoaddress',
      params: [address, amount],
    };

    return await request(options);
  }
}

export default new AddressService();
