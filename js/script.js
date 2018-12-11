 var hello = " "; 
 var hello = prompt( "Hello, and welcome to my page. What is your name?")
  document.getElementById("mainBanner").innerHTML = " Hi " + hello + ", please choose an option below!";



  document.getElementById("hireButton").onclick = function () {
    location.href = "https://kodesign.netlify.com/";
};











/*
// Create three variables to store the information needed.
var price;
var quantity;
var total;

// Assign values to the price and quantity variables.
price = 5;
quantity = 14;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;

// Get the element with an id of cost.
var el = document.getElementById('cost');
el.textContent = '$' + total;
*/ 