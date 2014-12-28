# correcthorse

> See **XKCD** for reference!

[![xkcd.png][1]][2]

# Install

Install it locally
```shell
npm install correcthorse --save
```
or in global
```shell
npm install correcthorse -g
```

# `correcthorse(options?)`

You'll get back a random strong and readable password

```js
var correcthorse = require('correcthorse');
correcthorse();
// <- 'correct-horse-battery-staple'
```

You can set a couple of options.

- `length` is the minimum character length allowed
- `words` is the minimum word count allowed

# CLI

```shell
$ correcthorse
correct-horse-battery-staple
```

# Language
You can define a language to use :
```shell
$ correcthorse fr
correct-cheval-batterie-base
```

## Add a language
Just add a json file name wordlist-lang.json with the list of the words to use.

# License

MIT

[1]: http://imgs.xkcd.com/comics/password_strength.png
[2]: http://xkcd.com/936/
