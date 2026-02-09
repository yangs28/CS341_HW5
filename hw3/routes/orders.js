var express = require('express');
var router = express.Router();

/* GET orders page. */
router.get('/', function(req, res, next) {
res.json({
    title: 'Orders',
    data: [
    {"topping":"cherry", "quantity":2},
    {"topping":"plain", "quantity":6},
    {"topping":"chocolate", "quantity":3}
]
});
});

module.exports = router;
