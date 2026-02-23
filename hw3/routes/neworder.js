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

//Processes a POST request and sends data to the database.
router.post("/", async function (req, res) {

  const orderInfo = req.body;
  const quantity = orderInfo.quantity;
  const topping = orderInfo.topping;
  const notes = orderInfo.notes;

  console.log("Post received:", orderInfo);

  //Due to wifi issues a try catch is necessary to prevent server timeout error (if you are not on school wifi the database inquiry will not work)
  //If that happens we can just blame it on Cloudflare or AWS (ignore the fact this is running on localhost)
  try {
    //Uses submitted topping to find the correct t_id
    const toppingType = await bigData.dbquery(
      `SELECT t_id FROM toppings WHERE name = '${topping}'`,);
      const toppingId = toppingType[0].t_id;

    //Inserts new order into database. Month is hard coded as July, year is 2023. May change the hard coding if needed
    await bigData.dbquery(
      `INSERT INTO orders (t_id, quantity, month, year, notes) VALUES (${toppingId}, ${quantity}, 7, 2023, '${notes}')`,);

    //Returns data. This doesn't actually do anything for now, it's just here as a stub
    const data = [ { topping: topping, quantity: quantity, notes: notes } ];
    console.log("Data was sent:", data);
    res.json({
      title: "Order data for July 2023",
      data: data,
    });
  } catch (error) {
    console.error("Badness occurred blame Cloudflare", error);
  }
});
module.exports = router;
