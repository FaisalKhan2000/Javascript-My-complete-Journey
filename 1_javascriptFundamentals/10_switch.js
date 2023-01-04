//* Switch statement

/*
switch statement is used to perform different actions based on different conditions. The switch statement evaluates an expression, and compares the result to the values of each case label. If a match is found, the code associated with that case is executed.

Here is the syntax for a switch statement:

switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression does not match any of the values
}

*/

// Here is an example of a switch statement that assigns a grade based on a score:

let score = 75;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`Score: ${score} Grade: ${grade}`); // Score: 75 Grade: C
