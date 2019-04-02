var orm = require('../config/orm.js');

var customer = {
  all: function (cb) {
    orm.selectAll('customers', function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (name, size, time, cb) {
    console.log('customer.create called');
    orm.insertOne('customers', ['name', 'size', 'check_in_time'], [name, size, time], function (res) {
      cb(res);
    });
  },
  updateSeated: function (id, cb) {
    orm.updateOne('customers', 'seated', '1', id, function (res) {
      cb(res);
    });
  },
  checkout: function (id, cb) {
    orm.deleteOne('customers', id, function (result) {
      cb(result);
    })
  }
};

module.exports = customer;