#!/usr/bin/env node

const UtmpParser = require('utmp');
const p = new UtmpParser('/var/log/wtmp');

p.on('data', (d) => {
  console.log("got record:", d);
})

p.run();
