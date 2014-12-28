'use strict';

var fs = require('fs');

function correcthorse (options) {
  function random () {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
  }

  var o = options || {};
  var len = o.length || 10;
  var count = o.words || 4;
  var lang = o.lang || 'en';
  var result = '';

  // Get lang from CLI in first parameter
  var args = process.argv[2];
  lang = args || lang;
  lang = lang.toLowerCase();

  // Get appropriate wordlist file
  var file = './wordlist-'+lang+'.json';
  if (!fs.existsSync(file)) {
    console.log('Sorry, the wordlist for this lang does not exists.');
    process.exit(1);
  }

  var wordlist = require(file);

  while (count --> 0 || result.length < len) {
    result += random() + '-';
  }

  return result.slice(0, -1);
}

module.exports = correcthorse;
