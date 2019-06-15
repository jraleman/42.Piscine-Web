#!/usr/bin/env node

if (process.argv[2] != undefined) {
  console.log(process.argv[2].replace(/\s+/g,' ').trim());
}
