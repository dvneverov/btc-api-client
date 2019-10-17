import chai from 'chai';
import request from 'supertest';
import Server from '../server';
import * as moxios from 'moxios';

const expect = chai.expect;

describe('Address', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should get new Bitcoin address', done => {
    moxios.stubRequest(/.*/, {
      status: 200,
      responseText: '1GVY5eZvtc5bA6EFEGnpqJeHUC5YaV5dsb',
    });

    request(Server)
      .post('/api/v1/address/getnewaddress')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('address');
        done();
      });
  });

  it('should send an amount to a given address', done => {
    moxios.stubRequest(/.*/, {
      status: 200,
      responseText:
        '1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d',
    });

    request(Server)
      .post('/api/v1/address/sendtoaddress')
      .send({ address: '1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd', amount: 0.1 })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('txid');
        done();
      });
  });

  it('should NOT send an amount to a given address without provided address and amount', () => {
    moxios.stubRequest(/.*/, {
      status: 200,
      responseText:
        '1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d',
    });

    request(Server)
      .post('/api/v1/address/sendtoaddress')
      .then(r => {
        expect(r.statusCode).to.equal(400);
      });
  });
});
