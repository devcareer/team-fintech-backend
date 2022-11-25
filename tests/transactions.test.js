const request = require('supertest');
const baseUrl = 'localhost:8000';
const { v4: uuidv4 } = require('uuid');

test('airtime transfer function', async () => {
  const reference = uuidv4();

  const mockrequest = {
    country: 'NG',
    customer: '+23490803840303',
    amount: 100,
    recurrence: 'ONCE',
    type: 'AIRTIME',
    reference,
  };

  const response = await request(baseUrl).post('/api/v1/transfer/airtime').send(mockrequest);

  // the status code is going to be 500 because  the wallet has insufficient funds
  expect(response.statusCode).toBe(500);

  expect(response.body.error).not.toBe(null);
});

test('data transfer function', async () => {
  const reference = uuidv4();

  const mockrequest = {
    country: 'NG',
    customer: '+23490803840303',
    amount: 100,
    type: 'MTN 50 MB',
    recurrence: 'ONCE',
    reference,
  };
  const response = await request(baseUrl).post('/api/v1/transfer/data').send(mockrequest);

  // // the status code is going to be 500 because  the wallet has insufficient funds

  expect(response.statusCode).toBe(500);

  expect(response.body.error).not.toBe(null);
});
