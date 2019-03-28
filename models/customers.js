var orm = require('../config/orm.js');

var customer = {
  all: function (cb) {
    orm.selectAll('customers', function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (name, size, time, cb) {
    orm.insertOne('customers', ['name', 'size', 'check_in_time'], [name, size, time], function (res) {
      cb(res);
    });
  },
  updateSeated: function (id, cb) {
    orm.updateOne('customers', 'seated', '1', id, function (res) {
      cb(res);
    });
  }
};

customer.create('stevie', '3', '1234', function (res) {
  console.log(res);
});

customer.all(function (res) {
  console.log(res);
})

customer.updateSeated(4, function (res) {
  console.log(res);
})