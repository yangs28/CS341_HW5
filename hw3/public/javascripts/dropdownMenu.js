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
        const button = document.getElementById("dropbtn");
        $("#dropbtn").text(selectedMonth);
        alert("You have selected " + selectedMonth);

        $.post("/orders", {selectedMonth}, function(orders) {
            console.log(orders);
        });

    });
});
