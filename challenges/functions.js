// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
//open function with 3 parameters argum1 2, and callback
function consume(argument1, argument2, callback) {
  return callback[(argument1, argument2)];
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num3, num4) {
  return num3 * num4;
}

function greeting(first, last) {
  return `Hello ${first}${last}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2)); // 4
console.log(consume(10, 16)); // 160
console.log(consume("Mary", "Poppins")); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction(); //nested function ca access the const internal  because of the lexical environement. Everything aboter the nested function is available to it but anything outside of the function does not have the same availability
}
myFunction();
