module.exports = {
  // HTTP status as constants to improve readability of code
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORISED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  ERROR: 500,

  // constants ENUM values for user verification status
  VERIFIED: 'verified',
  UNVERIFIED: 'unverified',
  PENDING: 'pending',

  // constants ENUM values for transaction type
  DEBIT: 'debit',
  CREDIT: 'credit',

  // constants ENUM values for transaction purpose
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
  TRANSFER: 'transfer',
};
