var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    Types = mongoose.Types,
    SchemaString = mongoose.Schema.Types.String;

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

var gen = function(len, cb) {
    len = len || 7;

    var base = 64;
    var output = [];

    for (var i = 0; i < len; i++) {
        output.push(alphabet[Math.floor(Math.random() * base)]);
    }

    cb(null, output.join(""));
};

function ShortId(key, options) {
    this.generator = gen;

    this.len = options.len || 7;

    if (options.generator) {
        delete options.generator;
    }
    SchemaString.call(this, key, options);
}

ShortId.prototype.__proto__ = SchemaString.prototype;

Schema.Types.ShortId = ShortId;
Types.ShortId = String;

module.exports = exports = ShortId;
