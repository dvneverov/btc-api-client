import chai from 'chai';
import request from 'supertest';
import Server from '../server';
import * as moxios from 'moxios';

const expect = chai.expect;

describe('Transaction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should get transaction by id', done => {
    moxios.stubRequest(/.*/, {
      status: 200,
      response: {
        rawtx:
          '0100000001c6660657eb258f9e58d246d767f5aaa15980d4d26ee496e7e24fabf72f2cc3440000000048473044022026b2e3d408a7848ad18b35042163c0efb358c456c6006a0cd13c077ec213aeab02202115a38de465e0c927f858cbb83fca45bddb0e469524667e39fd0c54ab5007d701ffffffff0100f2052a0100000017a914b6cb85e6fa58b2bff3da23074eb0f1a0ddb23e1f8700000000',
        amount: -50.0,
        fee: 0.0,
        confirmations: 2,
        blockhash:
          '0000000003abdd41db27190bb4f19e36497f647d1ea586ef543c44f7ccd40015',
        blockindex: 1,
        txid:
          '4ec492788efb3c9e4e23972f095bd575217288c9f6b8237922145aeff8dae8d5',
        time: 1339001503,
        details: [
          {
            account: '',
            address: '2N9uknE7Zy9M3cPxWvkHu9HQiArL3pnbcUF',
            category: 'send',
            amount: -50.0,
            fee: 0.0,
          },
        ],
      },
    });
    request(Server)
      .post('/api/v1/transaction/gettransaction')
      .send({
        txid:
          '4ec492788efb3c9e4e23972f095bd575217288c9f6b8237922145aeff8dae8d5',
      })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('amount');
        done();
      });
  });

  it('should NOT get transaction without provided txid', () =>
    request(Server)
      .post('/api/v1/transaction/gettransaction')
      .then(r => {
        expect(r.statusCode).to.equal(400);
      }));
});
