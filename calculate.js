"use strict";

// Variables 

let input = document.getElementById("cents");

let result;
let quarters = 25;
let dimes = 10;
let nickles = 5;
let pennies = 1;

document.getElementById("calculate").onclick = () => {

    if(isNaN(input.value) == true){


        alert('Enter a number.')

    } else{

        result = input.value / quarters;

        document.getElementById('quarters').value = Math.floor(result);

        document.getElementById('dimes').value = Math.floor((input.value % quarters) / dimes);

        document.getElementById('nickels').value = Math.floor((input.value % quarters % dimes) / nickles);

        document.getElementById('pennies').value =  Math.floor((input.value % quarters % dimes % nickles) / pennies);

    }
}

$(document).ready( () => {
    $("#calculate").click( () => {
        
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method