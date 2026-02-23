/*
 * CS 341: Homework 5
 * Purpose: A JavaScript file that allows the dropdown to change. Allows user to select a month from the dropdown menu and have the display change appropriately.
 * Will also send a post to the server and update the list accordingly
 * File type: .js file
 * Author: Sean Yang
 */

$(document).ready(function () {
  //When a month is selected from the drop-down, change the month accordingly
  $(".dropdown-content a").click(function () {
    var selectedMonth = $(this).text();
    //Attempts to convert the selectedMonth to a text object for sending
    var monthText = selectedMonth.toLowerCase();
    //Grabs the dropdownbutton and changes the text to the selected month
    const button = document.getElementById("dropbtn");
    $("#dropbtn").text(selectedMonth);

    //Sends a post to the server with the info
    $.post("/orders", { monthText: monthText }, function (data) {
      console.log(data);
      //Clears the current list
      $("#orderDetails").html("");
      //Adds new content to the list based on the data received from the server
      //Due to how data is formatted,  empty data will mean the table will be empty and nothing is displayed
      for (var i = 0; i < data.data.length; i++) {
        var order = data.data[i];
        $("#orderDetails").append(
          "<li>" + order.quantity + " " + order.topping + "</li>",
        );
      }
    });
  });
});
