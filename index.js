'use strict';

const { start } = require('./src/server.js');
const { sequelizeDatabase } = require('./src/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log('server online');
    start();
  })
  .catch(e => console.error(e));
