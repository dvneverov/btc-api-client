const config = {
  host: process.env.BTC_HOST || 'http://localhost',
  port: process.env.BTC_PORT,
  user: process.env.BTC_USER,
  password: process.env.BTC_PASSWORD,
};

config.reqDefaults = {
  method: 'POST',
  auth: {
    username: config.user,
    password: config.password,
  },
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  data: {
    jsonrpc: '1.0',
    id: 'curltest',
  },
};

config.reqDefaults.url = config.port
  ? `${config.host}:${config.port}`
  : config.host;

export default config;
