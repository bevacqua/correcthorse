# correcthorse

> See **XKCD** for reference!

[![xkcd.png][1]][2]

# Install

```shell
npm install correcthorse --save
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
correcthorse
//
```

# License

MIT

[1]: http://imgs.xkcd.com/comics/password_strength.png
[2]: http://xkcd.com/936/
