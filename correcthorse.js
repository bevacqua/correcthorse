'use strict';

var wordlist = require('./wordlist.json');

function random () {
  return wordlist[Math.floor(Math.random() * wordlist.length)];
}

function correcthorse (options) {
  var o = options || {};
  var len = o.length || 10;
  var count = o.words || 4;
  var result = '';

  while (count --> 0 || result.length < len) {
    result += random() + '-';
  }

  return result.slice(0, -1);
}

module.exports = correcthorse;
