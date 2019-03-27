var orm = require('../config/orm.js');


var customer = {
  all: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (name, size, cb) {
    orm.insertOne(name, size, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.updateOne(id, function (res) {
      cb(res);
    });
  }
};