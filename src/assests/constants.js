// HTTP status as constants to improve readability of code
export const SUCCESS = 200;
export const CREATED = 201;
export const BAD_REQUEST = 400;
export const UNAUTHORISED = 401;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const ERROR = 500;

// constants ENUM values for user verification status
export const VERIFIED = 'verified';
export const UNVERIFIED = 'unverified';
export const PENDING = 'pending';

// constants ENUM values for transaction type
export const DEBIT = 'debit';
export const CREDIT = 'credit';

// constants ENUM values for transaction purpose
export const DEPOSIT = 'deposit';
export const WITHDRAWAL = 'withdrawal';
export const TRANSFER = 'transfer';
