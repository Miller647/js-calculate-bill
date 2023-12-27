// Function Definition
function calculateBill() {
  // this is the body of the function
  console.log("Running Calculate Bill Function");
  const total = 100 * 1.13;
  // temporary variable only available inside of the function
  return total;
}

// Function Call or Running a Function
const myTotal = calculateBill();
// console.log(`Your total is $${myTotal}`);

// Or could interpolate the function calculateBill() in the console.log

console.log(`Your total is $${calculateBill()}`);
