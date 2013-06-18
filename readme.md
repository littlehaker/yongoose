# Yongoose

Yongoose is a mongoose REPL.

## install

```
git clone https://github.com/littlehaker/yongoose.git
```

## usage
Create a file `console.js`

```js
var yongoose = require('yongoose');
yongoose.start(
  "mongodb://localhost/test", // Mongoose collect to mongodb://localhost/test 
  __dirname + "/models", // Model directory. do NOT use ./models!
  true // Is one model file a coffee file?
);
```

Run `node console.js`, then you will see:

```
mongodb://localhost/test connected
Yongoose> Post loaded
User loaded
Yongoose> 
```

Now in the repl, we can use `User` and `Post` models. There is also a `print`(alias `p`) helper to print the callback arguments.

For example:

```js
Post.find({}, p)
```

## helpers
- `print`(alias `p`): print the callback arguments.
- `_arguments`(alias `_args`): the arguments of `print`.
- `_0`: `_args[0]`.
- `_1`: `_args[1]`.

## globals
- `mongoose`: the mongoose object


## lisence

MIT

Copyright (C) <2013> <littlehaker@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
