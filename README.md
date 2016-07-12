THIS PACKAGE IS NO LONGER SUPPORTED AND WILL NOT BE UPDATED.

mongoose-minid
================

This plugin is a highly customised version of mongoose-shortid, without bignum.

You can get it via npm by typing:

```npm
npm install mongoose-minid
```

This plugin provides a new Schema Type, ShortId, that can be used in place of ObjectId. The generated IDs are random url-safe strings of configurable length, represented in a 64 bit string.

This plugin will automatically retry inserts on a collision, up to a maximum of 5 retries.

### What's the point?

This module is going to make your ObjectId from something like `507f191e810c19729de860ea` to just `Ng3zf_`

### Usage

```javascript
var mongoose = require('mongoose');
var ShortId = require('mongoose-minid');

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
