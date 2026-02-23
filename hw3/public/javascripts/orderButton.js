/*
 * CS 341: Homework 5
 * Purpose: A Javascript file that allows for functionality of the order button. Also adds checks for toppings.
 * Also alerts the user if they selected vegan. Afterwards it displays the order details.
 * File type: .js file
 * Author: Sean Yang
 */

$(document).ready(function () {
  //Catches any orders
  $("#orderButton").click(function () {
    var toppingSelected = $("input[name='toppingOption']:checked");
    //Requires a topping selection for all orders before it can be registered. Prevents errors where the topping order is undefined
    if (!toppingCheck()) {
      alert("You have not selected a topping option!");
      return;
    }

    //If order contains any form of the word vegan, warn the user that the order contains dairy (I'm not sure what they were expecting as they are ordering cheesecake)
    if (veganCheck()) {
      alert("The order you submitted contains dairy!");
    } else {
      orderSummary();
      alert("Order submitted successfully!");
    }
  });

  //Helper function that checks if order contains any form of the word vegan
  function veganCheck() {
    var orderNotes = $("#orderNotes").val();
    if (orderNotes.includes("vegan") || orderNotes.includes("Vegan")) {
      return true;
    } else {
      return false;
    }
  }

  //Checks if the user has selected a topping. The user must select a topping before proceeding with the order
  function toppingCheck() {
    var toppingSelected = $("input[name='toppingOption']:checked");
    if (!toppingSelected.length) {
      return false;
    } else {
      return true;
    }
  }

  //Helper function that hides the order form and displays the order summary after a successful order
  function orderSummary() {
    var orderNotes = $("#orderNotes").val();
    var toppingOption = $("input[name='toppingOption']:checked").val();
    var quantity = $("#quantity").val();
    $("#orderNotes").hide();
    $("#orderTable").hide();
    $("#orderButton").hide();
    var toppingOption = $("input[name='toppingOption']:checked").val();
    //Prints a message informing the user of their order information
    $("#notesTitle").html(
      "Thank you! Your order has been placed! Your cheesecake has " +
        toppingOption +
        " topping. You have ordered " +
        $("#quantity").val() +
        " cheesecake(s). You have the following notes: " +
        orderNotes,
    );
  }
    $.post("/orders", { monthText: monthText }, function (data) {
      console.log(data);
    
});
