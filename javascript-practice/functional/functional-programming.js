//functional programming

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate); //calls the function to convert value of currencyTwo. 
//In functional programming data exists outside of the function

console.log(currencyTwo); //120
