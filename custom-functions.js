// Function Definition
// Parameters = placeholders

function calculateBill(billAmount, taxRate) {
  // this is the body of the function
  console.log("Running Calculate Bill Function");
  const total = billAmount * (1 + taxRate);
  // temporary variable only available inside of the function
  return total;
}

// Call, Run or Invoke Function
const myTotal = calculateBill();
// console.log(`Your total is $${myTotal}`);

// Or could interpolate the function calculateBill() in the console.log
// Arguments = actual values

console.log(`Your total is $${calculateBill(100, 0.13)}`);
