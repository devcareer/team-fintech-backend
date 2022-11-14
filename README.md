# The Backend for our Fintech Product

## Project Overview

### {Fintech App} is a Web App that allows users to send and receive Airtime, Data and Cash. This project seeks to solve the problem of disbursing giveaway prizes in bulk for the devCareer team.


### _This document will focus on the Backend requirements of the system._

### Required features

    User can sign up
    User can sign in
    User can create wallet
    User can fund wallet
    User can transfer cash, airtime or data
    User can undergo KYC 
    User can view all transaction history

### Optional features

    User can reset password
    User can report a failed transaction

## Technologies Used

- [NodeJS](https://nodejs.org/en/download/) - A cross-platform JavaScript runtime
- [ExpressJS](https://expressjs.com/) - NodeJS application framework
- [Postgres](https://www.postgresql.org/) - A relational database management system
- [Sequelize ORM](https://sequelize.org/) - A promise-based Node.js ORM for relational databases
- [Google OAuth]

## Installing/Running locally

- Clone or fork repo

  ```bash
    - git clone https://github.com/devcareer/team-fintech-backend.git
    - cd team-fintech-backend
  ```
- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials (ensure to provide the correct details). After configuring your database in accordance with the Sequelize config file (`./database/database.js`):

  ```
      - npm install
      - npm run db:seed
  ```
- Run `npm run dev` to start the server and watch for changes

## Documentation
