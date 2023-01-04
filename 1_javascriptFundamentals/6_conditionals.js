/*In JavaScript, conditionals are used to execute different pieces of code based on whether a specified condition is true or false.

The most common way to use conditionals in JavaScript is with the if statement. The if statement executes a block of code if a specified condition is true.
*/

// Here is an example of using an if statement:
let x1 = 10;

if (x1 > 5) {
  console.log("x is greater than 5");
}
/*
In the example above, the if statement checks whether the value of x is greater than 5. If it is, the code block inside the curly braces is executed and the string 'x is greater than 5' is printed to the console. If the condition is false, the code block is skipped.

You can also use the else keyword to specify a block of code to be executed if the condition is false.

*/
let x2 = 10;

if (x2 > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}
/*
In the example above, the else statement specifies a code block that will be executed if the condition in the if statement is false.

You can also use the else if keyword to specify additional conditions to be tested.

*/
let x3 = 10;

if (x3 > 15) {
  console.log("x is greater than 15");
} else if (x3 > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is not greater than 10 or 15");
}

//* Boolean conversion
/*
The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.
So, the code under this condition would never execute:
*/

if (0) {
  // 0 is falsy
  //   ...
}
// …and inside this condition – it always will:

if (1) {
  // 1 is truthy
  //   ...
}

//* Ternary Operator (?)

/*
the ternary operator (also known as the conditional operator) is a short-hand way to specify a conditional expression. It is written as a question mark (?) followed by a colon (:).

The ternary operator is used to specify a value based on a condition. The syntax for the ternary operator is as follows:


condition ? value1 : value2

If the condition is true, the expression evaluates to value1, otherwise it evaluates to value2.

Here is an example of using the ternary operator:

*/
let x = 10;
let y = x > 5 ? "x is greater than 5" : "x is not greater than 5";

console.log(y); // prints 'x is greater than 5'
