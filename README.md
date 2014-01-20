mongoose-minid
================

This plugin is a highly customised version of mongoose-shortid. The bignum dependency is removed and the generator is pure javascript now.

You can get it via npm by typing:

```npm
npm install mongoose-minid
```

This plugin provides a new Schema Type, ShortId, that can be used in place of ObjectId. The generated IDs are random url-safe strings of configurable length, represented in a 64 bit string.

This plugin will automatically retry inserts on a collision, up to a maximum of 5 retries.

### Usage

```javascript
var mongoose = require('mongoose');
var ShortId = require('mongoose-shortid');

var personSchema = mongoose.Schema({
    _id: ShortId,
    name: String
});
```

### Options

The default options are:

```javascript
var personSchema = mongoose.Schema({
    _id: {
        type: ShortId,
        len: 7     // Length 7 characters
    },
    name: String
});
```

### Custom ID Generation

If you're interested in more customizable module checkout https://github.com/jjwchoy/mongoose-shortid
