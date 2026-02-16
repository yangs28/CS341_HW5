/* 
 * CS 341: Homework 3
 * Purpose: A JavaScript file that allows the dropdown to change. Allows user to select a month from the dropdown menu and have the display change appropriately.
 * File type: .js file
 * Author: Sean Yang
*/    
    
    $(document).ready(function(){
      //When a month is selected from the drop-down, change the month accordingly 
    $(".dropdown-content a").click(function(){
        var selectedMonth = $(this).text();
        //Attempts to convert the selectedMonth to a text object for sending
        var monthText = selectedMonth.toLowerCase();
        const button = document.getElementById("dropbtn");
        $("#dropbtn").text(selectedMonth);

        //Sends a post to the server with the info 
        $.post("/orders", { monthText: monthText }, function(data) {
            console.log(data);
            //Clears the current list 
            $("#orderDetails").html("");

            data.data.forEach(function(order) {
                $("#orderDetails").append( "<li>" + order.quantity + " " + order.topping);
            });
        });



    });
});
