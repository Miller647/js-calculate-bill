// Function Declaration
// Hoisted
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous Function - function without a name
// Will receive an error in the console
// Can be used in callbacks and IIFE
// function(firstName) {
//     return `Dr. ${firstName}`
// }

// Function Expression - store a function as a value in a variable
// Some developers don't use them b/c errors would occur without details but now errors indicate where the issue is
// let doctorize2 = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow Functions

// Explicit Return - use the word 'return'
let inchToCM = (inches) => {
  return inches * 2.54;
};

// Implicit Return - remove word 'return'
let inchToCM2 = (inches) => inches * 2.54;

// Arrow Function Practice

// Start w/below function and convert to an arrow function
// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

let add = (a, b = 3) => a + b;

// Returning an object
// Start w/below function and convert to an arrow function
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

let makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE - Immediately Invoked Function Expression
(function () {
  console.log(`Running an anonymous function`);
  return `You're cool!`;
})();

// Methods - function that lives inside of an object

const tash = {
  name: "Natasha Miller",
  sayHi: function () {
    console.log(`Hey Natasha`);
  },
  //  Short-hand Method
  yellHi() {
    console.log(`HEY NATASHA!!`);
  },

  //   Arrow function
  whisperHi: () => {
    console.log(`hi tash...`);
  },
};

// Callback Functions

// Click callback
const button = document.querySelector(".click");

function handleClick() {
    console.log(`Great Clicking!`)
}

button.addEventListener("click", function() {
    console.log(`Nice Clicking!!`)
});