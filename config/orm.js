var connection = require('./connection.js')


var orm = {
  selectAll: function (table, callback) {
    var queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;

      callback(result);
    });


  },
  insertOne: function (table, columnsArray, valuesArray, callback) {
    var checkInTime = (new Date).getTime();
    var queryString = `INSERT INTO ${table} (??) VALUES (?)`;
    connection.query(queryString, [columnsArray, valuesArray], function (err, result) {
      console.log(err);
      if (err) throw err;
      callback(result)
    });
  },
  updateOne: function (table, colToUpdate, newColValue, id, callback) {
    var queryString = `UPDATE ${table} SET ${colToUpdate} = '${newColValue}' WHERE id = '${id}'`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result)
    });
  }
}

module.exports = orm;