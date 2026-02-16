var express = require('express');
var router = express.Router();

/* GET orders page. */
router.get('/', function(req, res, next) {
    //Displays json data for the orders page. Data currently hard coded
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
router.post('/', function(req, res) {
    const selectedMonth = req.body.monthText;
    console.log("Post received:", selectedMonth);

//Checks month received and sends appropriate JSON data. Right now each month has hardcoded data, this is just a hack fix
    switch (selectedMonth) {
        case 'jan':
            console.log("January orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":2},
    {"topping":"chocolate", "quantity":6},
    {"topping":"plain", "quantity":3}
]   
});
            break;
        case 'feb':
            console.log("February orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":2},
    {"topping":"chocolate", "quantity":8},
    {"topping":"plain", "quantity":14}
]   
});     
            break;
        case 'mar':
            console.log("March orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":69},
    {"topping":"chocolate", "quantity":420},
    {"topping":"plain", "quantity":0}
]   
});
            break;
        case 'apr':
            console.log("April orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":1},
    {"topping":"chocolate", "quantity":2},
    {"topping":"plain", "quantity":3}
]   
});
            break;
        case 'may':
            console.log("May orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":4},
    {"topping":"chocolate", "quantity":2},
    {"topping":"plain", "quantity":2}
]   
});
            break;
        case 'jun':
            console.log("June orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":7},
    {"topping":"chocolate", "quantity":4},
    {"topping":"plain", "quantity":3}
]   
});
            break;
        case 'jul':
            console.log("July orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":1},
    {"topping":"chocolate", "quantity":2},
    {"topping":"plain", "quantity":6}
]   
});
            break;
        case 'aug':
            console.log("August orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":2},
    {"topping":"chocolate", "quantity":6},
    {"topping":"plain", "quantity":3}
]   
});
            break;
        case 'sep':
            console.log("September orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":9},
    {"topping":"chocolate", "quantity":9},
    {"topping":"plain", "quantity":9}
]   
});
            break;
        case 'oct':
            console.log("October orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":5},
    {"topping":"chocolate", "quantity":4},
    {"topping":"plain", "quantity":2}
]   
});
            break;
        case 'nov':
            console.log("November orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":5},
    {"topping":"chocolate", "quantity":6},
    {"topping":"plain", "quantity":7}
]   
});
            break;
        case 'dec':
            console.log("December orders");
            res.json({
    title: 'Orders from ' + selectedMonth,
    data: [
    {"topping":"cherry", "quantity":1},
    {"topping":"chocolate", "quantity":6},
    {"topping":"plain", "quantity":3}
]   
});
            break;
        default:
            console.log("Invalid month received");
    }
});

module.exports = router;
