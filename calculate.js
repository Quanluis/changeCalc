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
        
        console.log('How many Quarters fit: ' + Math.floor(result));

        console.log('How many dimes fit ' + Math.floor((input.value % quarters) / dimes));

        console.log('How many nickles fit: ' + Math.floor((input.value % quarters % dimes) / nickles));

        console.log('How many pennies fit: '+ Math.floor((input.value % quarters % dimes % nickles) / pennies));
        
    }
}

$(document).ready( () => {
    $("#calculate").click( () => {
        
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method