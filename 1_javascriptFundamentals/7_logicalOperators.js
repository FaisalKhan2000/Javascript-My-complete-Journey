//* Logical Operators

/*

there are three logical operators: &&, ||, and !.

&& is the logical AND operator. It returns true if both of the operands are true, and false otherwise.

|| is the logical OR operator. It returns true if either of the operands is true, and false otherwise.

! is the logical NOT operator. It returns true if the operand is false, and false if the operand is true.

*/

true && true; // true
true && false; // false
false && true; // false
false && false; // false

true || true; // true
true || false; // true
false || true; // true
false || false; // false

!true; // false
!false; // true

let x = 10;
let y = 5;

// Using the && operator
if (x > 0 && y > 0) {
  console.log("Both x and y are positive.");
}

// Using the || operator
if (x > 0 || y > 0) {
  console.log("Either x or y, or both, are positive.");
}

// Using the ! operator
if (!(x > 0)) {
  console.log("x is not positive.");
}
