var mongoose = require('mongoose');
var ShortId = require('./generator');

var defaultSave = mongoose.Model.prototype.save;

mongoose.Model.prototype.save = function(cb) {
    if (typeof cb == "undefined") {
        cb = function() {};
    }

    if (this.isNew && this._id === undefined) {
        var idType = this.schema.tree['_id'];

        if (idType === ShortId || idType.type === ShortId) {
            var idInfo = this.schema.path('_id');
            var retries = 5;
            var self = this;

            (function attemptSave() {
                idInfo.generator(idInfo.len, function(err, id) {
                    if (err) {
                        cb(err);
                        return;
                    }
                    self._id = id;
                    defaultSave.call(self, function(err, obj) {
                        if (err && err.code == 11000 && err.err.indexOf('_id') !== -1 && retries > 0) {
                            --retries;
                            attemptSave();
                        } else {
                            cb(err, obj);
                        }
                    });
                });
            })();

            return;
        }
    }

    defaultSave.call(this, cb);
};

module.exports = exports = ShortId;