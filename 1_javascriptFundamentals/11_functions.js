//* functions

/*
In JavaScript, a function is a block of code that performs a specific task. Functions are used to organize and reuse code, and to help divide a program into smaller and more manageable parts.

There are two ways to define a function in JavaScript:

Function declaration:

function name(parameters) {
  // code to be executed
}

Function expression:

const name = function(parameters) {
  // code to be executed
};

The parameters are variables that are passed to the function when it is called. The code inside the function is executed when the function is called.

*/

// Here is an example of a function that calculates the area of a rectangle:

function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(10, 20);
console.log(area); // 200

//* global and local variables

/*
there is a difference between local and global variables.

A local variable is a variable that is declared inside a function and is only accessible within that function. It is not visible or accessible from outside the function.

A global variable is a variable that is declared outside of any function, or a variable that is declared inside a function without the var, let, or const keyword. Global variables are accessible from any part of the code, including inside functions.

Here is an example that demonstrates the difference between local and global variables:
*/

let globalVar = "global"; // global variable

function myFunction() {
  let localVar = "local"; // local variable
  console.log(globalVar); // "global"
  console.log(localVar); // "local"
}

console.log(globalVar); // "global"
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

//* Parameters

/* 
a function can accept parameters, which are values that are passed to the function when it is called. The parameters are listed in the function definition, enclosed in parentheses and separated by commas.

Here is an example of a function that accepts two parameters:
*/

function greet(name, greeting) {
  console.log(`${greeting}, ${name}!`);
}

// To call this function and pass in the parameters, you would do the following:

greet("John", "Hello"); // Output: "Hello, John!"
greet("Mary", "Hi"); // Output: "Hi, Mary!"

/* 
The function will receive the values "John" and "Hello" for the first and second parameters, respectively, when it is called with greet("John", "Hello"). Similarly, the function will receive the values "Mary" and "Hi" for the first and second parameters when it is called with greet("Mary", "Hi").

Inside the function, the parameters can be used like any other variables. In the example above, the function uses string interpolation to create a greeting string using the values of the name and greeting parameters.
*/

//* Default values

/* 
you can specify default values for function parameters. This allows you to provide a value for the parameter in case no value is passed to the function when it is called.

To specify a default value for a parameter, you can use the = operator followed by the default value in the function definition. For example:
*/

function greet(name, greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet("John"); // Output: "Hello, John!"
greet("Mary", "Hi"); // Output: "Hi, Mary!"

//* Returning a value

/*
you can use the return statement to return a value from a function. The return statement ends the function execution and specifies a value to be returned to the function caller.

Here is an example of a function that returns a value:
*/

function square(x) {
  return x * x;
}

// his function calculates the square of a number and returns the result. To use the function, you would call it and pass in a value for the x parameter. The function will execute and return the squared value:

let result = square(3); // result is 9

// You can also use the returned value in an expression or assign it to a variable:

let y = square(4) + 2; // y is 18

// Note that once a return statement is encountered, the function execution ends immediately and the control is returned to the caller. Any code after the return statement will not be executed.

//* Functions == Comments

// Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.

// A separate function is not only easier to test and debug – its very existence is a great comment!

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
