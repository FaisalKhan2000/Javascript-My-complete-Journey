//* Arrow Functions

/*

Arrow functions are a shorthand syntax for defining functions in JavaScript. They are often used as an alternative to traditional function expressions.


let func = (arg1, arg2, ..., argN) => expression;

In other words, it’s the shorter version of:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};


Here is an example of an arrow function:

*/

let greet = (name) => console.log(`Hello, ${name}!`);

// This arrow function is equivalent to the following function expression:

// let greet = function (name) {
//   console.log(`Hello, ${name}!`);
// };

greet("faisal");
