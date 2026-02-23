var express = require('express');
var router = express.Router();

//Big Data from database (my naming scheme is always impeccable)
var bigData = require('./dbms_promise');

/* GET orders page. */
router.get('/', function(req, res, next) {
    //Displays default json data for the orders page. Data currently hard coded
res.json({
    title: 'Orders',
    data: [
    {"topping":"cherry", "quantity":2},
    {"topping":"plain", "quantity":6},
    {"topping":"chocolate", "quantity":3}
]
});
});

//Processes a POST request. If you receive a post it should update to the order info for the selected month
//I had to change this to be an async function because it db queries kept being angry >:(
router.post('/', async function(req, res) {
    //Selected month grabs the abbreviated month from dropdown menu. Afterwards it is converted to an int for use with the database
    const selectedMonth = req.body.monthText;
    const monthToInt = {
        "jan": 1,
        "feb": 2,
        "mar": 3,
        "apr": 4,
        "may": 5,
        "jun": 6,
        "jul": 7,
        "aug": 8,
        "sep": 9,
        "oct": 10,
        "nov": 11,
        "dec": 12
    };
    const monthInt = monthToInt[selectedMonth];
    console.log("Post received:", selectedMonth);

    //Due to wifi issues a try catch is necessary to prevent server timeout error
    //We can just tell the consumer to blame Cloudflare (ignore the fact this is running on localhost)
    try {
    //Grabs toppings and order info from database
    const toppings = await bigData.dbquery(`SELECT * FROM toppings`);
    const orders = await bigData.dbquery(`SELECT * FROM orders WHERE month = ${monthInt} AND year = 2023 ORDER BY o_id ASC`);

    res.json({
        title: 'Orders for ' + selectedMonth,
        data: [
            {"topping":toppings[0].name, "quantity":orders[0].quantity},
            {"topping":toppings[1].name, "quantity":orders[1].quantity},
            {"topping":toppings[2].name, "quantity":orders[2].quantity}
        ]
    });
    } catch (error) {
        console.error("Badness occurred blame Cloudflare", error);
    }
});
module.exports = router;

