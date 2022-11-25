const shell = require('shelljs');
const db = require('../.jest/test.db');
const { transferAirtime, sayHello } = require('../src/controllers/transactionControllers');
const { v4: uuidv4 } = require('uuid');

const mockResponse = {
  status: jest.fn(),
  send: jest.fn(),
};
const mockResponseSent = { send: jest.fn() };
mockResponse.status = jest.fn().mockImplementation((status) => {
  mockResponseSent.statusCode = status;
  return mockResponseSent;
});

const mockRequest = () => {
  const reference = uuidv4();
  return {
    body: {
      country: 'NG',
      customer: '+23490803840303',
      amount: 100,
      recurrence: 'ONCE',
      type: 'AIRTIME',
      reference,
    },
  };
};
const mockStatusCode = { SUCCESS: 200, ERROR: 500 };

test(
  1,
  async () => {
    let req = mockRequest();
    // let country = 'NG';
    const response = await transferAirtime(req);
    //   const response = await sayHello();
    expect(response).not.toBeNull();
    const statusCode = mockStatusCode;
    // await carController.processCarSale(response);
    expect(response.statusCode).toBe(200);
  },
  20000
);
