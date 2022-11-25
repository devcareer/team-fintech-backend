const shell = require('shelljs');
const db = require('../.jest/test.db');

beforeAll(async () => {
  jest.resetModules();
  await shell.exec('npm run migrate:up');
});

afterAll(async () => {
  await shell.exec('npm run migrate:down');
});

test('users table exists', async () => {
  const result = await db.query('SELECT 1 FROM public.users LIMIT 0;');
  expect(result).not.toBeNull();
});

test('wallets table exists', async () => {
  const result = await db.query('SELECT 1 FROM public.wallets LIMIT 0;');
  expect(result).not.toBeNull();
});

test('transactions table exists', async () => {
  const result = await db.query('SELECT 1 FROM public.transactions LIMIT 0;');
  expect(result).not.toBeNull();
});
