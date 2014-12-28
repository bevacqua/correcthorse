'use strict';

function correcthorse (options) {
  var o = options || {};
  var len = o.length || 10;
  var count = o.words || 4;
  var result = '';

  function random () {
    var wordlist = require('./wordlist.json');
    return wordlist[Math.floor(Math.random() * wordlist.length)];
  }

  while (count --> 0 || result.length < len) {
    result += random() + '-';
  }

  return result.slice(0, -1);
}

module.exports = correcthorse;
