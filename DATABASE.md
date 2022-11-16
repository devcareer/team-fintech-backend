## To connect to the database :

- Set up a PostgreSQL database either locally or online.

- Get your database credentials i.e database name, database username, database password and database host.

- Using the env.example file, create an .env file in the root of the project filling in the credentials as the values

## Database Schema
### The database consists of three tables: users, wallets and transactions.

**Users Table**

The table stores the users details and is defined with the [users model](./src/models/user.js).

| columns |        |
| ---     |  ---   |
| id      | stores unique UUIDs to identify each row |
| firstname | stores string containing users first name |
|lastname | string containing users last name |
| email | stores users email. Each entry must be unique |
| password | stores the hashed password of the user. Each entry must be unique |
| phonenumber | stores the  phone number of the user. Each entry must be unique |
| is_verified | stores the verification status of each user. It can only accept three pre-defined ENUM values `pending` , `verified` and `unverified` .|

**Wallets Table**

The table stores the deatails of each wallet in the system and is defined in the [wallets model](./src/models/wallet.js).

| columns |        |
| ------- | ------ |
| id      | unique UUIDs for identifying each row |
|user_id  | stores a refrenece to the wallet owner using the user id |
|balance  | stores the amount of money in the wallet |

**Transactions table**

This table stores all the transactions in the system and is defined by the [transaction model](./src/models/transaction.js)

| columns |     |
| ---     | --- |
| id | stores unique identifiers for each row using UUIDs |
| txn_type | stores a sting of the type of transaction. Accepts one of two predefined ENUM values `credit` or `debit` .|
| purpose | stores a sting of the purpose of the transaction. Accepts predefined ENUM values of `deposit` , `transfer` or `withdrawal` .|
| amount | stores the amount of money in the transaction in decimal |
| wallet_id | stores a refrence to the wallet that initiated the transaction |  
| reference | stores a string of the unique reference number for each transaction |
| balance_before | stores the balance of the wallet before the transaction |
| balance_after | stores the balance of the wallet after the transaction |
| status | stores a string of the status of the transaction. Accepts the ENUM values of `success` , `failure` and `pending` . |