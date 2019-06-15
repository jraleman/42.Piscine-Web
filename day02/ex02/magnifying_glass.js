#!/usr/bin/env node

const fs = require('fs');
const parseFile = (file, str1, str2) => {
  let parse = file.replace(str1, (toMatch) => {
    return (toMatch.replace(str2, (toReplace) => {
      return (toReplace = toReplace.toUpperCase());
    }));
  });
  return (parse);
}

if (process.argv[2] != undefined) {
  try {
    const fileHTML = fs.readFileSync(process.argv[2], 'utf8');
    let output = parseFile(fileHTML, /<a.*?title="(.*?)">/g, /[^title="]*".*/);
    output = parseFile(output, /<a.*</g, /(>)(.*?)(<)/).slice(0, -1);
    console.log(output);
  }
  catch (err) {
    console.log(`ʕノ•ᴥ•ʔノ ︵ ┻━┻ ${err.message}.`);
  }
}
