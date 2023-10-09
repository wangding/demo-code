#!/usr/bin/env node

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

(async () => {
  const db = await open({
    filename: './app.db',
    driver: sqlite3.Database
  });
  const rs = await db.all('select * from method');
  console.log(rs);
  await db.close();
})();
