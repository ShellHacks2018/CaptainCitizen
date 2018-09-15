'use strict';

module.exports = {
  db: {
    url: process.env.DB_URL,
    port: 27017,
    database: 'db',
    name: 'db',
    connector: 'mongodb',
    username: process.env.DB_USER,
    password: process.env.DB_PW,
  }
};
