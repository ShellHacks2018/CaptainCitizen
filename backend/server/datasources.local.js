'use strict';
var envs = require('./env.js');

console.log(envs);

module.exports = {
  db: {
    url: envs.db_url,
    port: 27017,
    database: 'db',
    name: 'db',
    connector: 'mongodb',
    username: envs.db_user,
    password: envs.db_pw,
  }
};
