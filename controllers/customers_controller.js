var express = require('express');
var customer = require('../models/customer.js');

var router = express.Router();

router.get('/', function (req, res) {
  customer.all(function (results) {
    customersObj = {
      waiting: results.filter(function (customer) {
        if (customer.seated === 0) return true;
      }),
      seated: results.filter(function (customer) {
        if (customer.seated === 1) return true;
      })
    }
    console.log(customersObj);
    res.render("index", customersObj);
  });
})

router.post('/', function (req, res) {
  console.log('hi');
  customer.create(req.body.name, req.body.size, req.body.time, function (result) {
    console.log(result);
    res.json(result);
  })
});

router.put('/', function (req, res) {
  console.log('put route');
  console.log(req.body);
  customer.updateSeated(req.body.customerId, function (result) {
    console.log(result);
    res.json(result);

  })
});


router.delete('/', function (req, res) {
  console.log('put route');
  console.log(req.body);
  customer.checkout(req.body.customerId, function (result) {
    console.log(result);
    res.json(result);
  })
})



module.exports = router;