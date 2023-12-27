// Function Definition
// Parameters = placeholders

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  //   console.log(billAmount, taxRate);
  // this is the body of the function
  console.log("Running Calculate Bill Function");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  // temporary variable only available inside of the function
  return total;
}

// Call, Run or Invoke Function
// When a function is run we can pass a value directly or a reference to a variable that holds a value
// let tashTotal = 450;
// let tashTaxRate = 0.25;
const myTotal = calculateBill(100);
console.log(`Your total is $${myTotal}`);

// Or could interpolate the function calculateBill() in the console.log
// Arguments = actual values

// console.log(`Your total is $${calculateBill(tashTotal, tashTaxRate)}`);

// Function Definition
// function sayHiTo(firstName) {
//   return `Hello ${firstName}!!`;
// }

// let greeting = sayHiTo("Natasha");
// console.log(greeting);

// Can pass through expressions as arguments
// const myTotal3 = calculateBill(20 + 40 + 25, 0.13);
// console.log(`The total is $${myTotal3}`);

// Not ok to reuse variables in same function block
// Ok to reuse parameters in different functions
// Parameters are scoped to the confines of their own function

function doctorize(name) {
  return `Dr. ${name}`;
}

// Can also use '' (empty string) for default value
function yell(name = `Silly Rabbit`) {
  return `HEY ${name.toUpperCase()}!`;
}
console.log(yell());

// Can pass a function within a function
console.log(yell(doctorize("Natasha")));

// Pass undefined as argument to fall back to default value
// Used infrequently
const myTotal4 = calculateBill(100, undefined, 0.2);
console.log(`Your total is $${myTotal4}`);
