var express = require("express");
var router = express.Router();

//Big Data from database (my naming scheme is always impeccable)
var bigData = require("./dbms_promise");

/* GET orders page. */
router.get("/", function (req, res, next) {
  //Displays default json data for the orders page. Data currently hard coded
  res.json({
    title: "Orders",
    data: [
      { topping: "cherry", quantity: 2 },
      { topping: "plain", quantity: 6 },
      { topping: "chocolate", quantity: 3 },
    ],
  });
});

//Processes a POST request. If you receive a post it should update the order info by retrieving the corresponding month from the database
router.post("/", async function (req, res) {
  //Selected month grabs the abbreviated month from dropdown menu. Afterwards it is converted to an int for use with the database
  const selectedMonth = req.body.monthText;
  const monthToInt = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12,
  };
  const monthInt = monthToInt[selectedMonth];
  console.log("Post received:", selectedMonth);

  //Due to wifi issues a try catch is necessary to prevent server timeout error (if you are not on school wifi the database inquiry will not work)
  //If that happens we can just blame it on Cloudflare or AWS (ignore the fact this is running on localhost)
  try {
    //Grabs toppings and order info from database. This should join everything into one big data entry if successful
    const orderData = await bigData.dbquery(
      `SELECT t.name, o.quantity FROM orders o INNER JOIN toppings t ON o.t_id = t.t_id WHERE o.month = ${monthInt} AND o.year = 2023 ORDER BY o.o_id ASC`,
    );

    //For loop that grabs all topping and order data from the specified month
    //If no data exists it displays an empty table
    const allOrders = [];
    for (let i = 0; i < orderData.length; i++) {
      allOrders.push({
        topping: orderData[i].name,
        quantity: orderData[i].quantity,
      });
    }

    //Sends back the order detail. Empty if no orders exist
    res.json({
      title: "Orders for " + selectedMonth,
      data: allOrders,
    });
  } catch (error) {
    console.error("Badness occurred blame Cloudflare", error);
  }
});
module.exports = router;
