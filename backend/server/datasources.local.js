'use strict';
var envs = require('./env.js');

module.exports = {
  db: {
    url: envs.db_url,
    port: 27017,
    database: 'db',
    name: 'db',
    connector: 'mongodb',
    username: envs.db_user,
    password: envs.db_pw,
  },
  mapitems: {
    url: envs.db_url,
    port: 27017,
    database: 'mapitems',
    name: 'mapitems',
    connector: 'mongodb',
    username: envs.db_user,
    password: envs.db_pw,
  },
  s3: {
    name: 's3',
    connector: 'loopback-component-storage',
    provider: 'amazon',
    key: envs.aws_key,
    keyId: envs.aws_keyid
  }
};
