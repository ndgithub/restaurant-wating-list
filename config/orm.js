var connection = require('./connection.js')


var orm = {
  selectAll: function (callback) {
    var queryString = "SELECT * FROM customers";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });


  },
  insertOne: function (name, size, callback) {
    var checkInTime = (new Date).getTime();
    var queryString = `INSERT INTO customers (name, size, check_in_time, seated) VALUES ('${name}', '${size}', ${checkInTime}, false)`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log(result);
      callback(result)
    });
  },
  updateOne: function (id, callback) {
    var queryString = `UPDATE customers SET seated = 'true' WHERE id = ${id}`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log(result);
      callback(result)
    });
  }
}

module.exports = orm;