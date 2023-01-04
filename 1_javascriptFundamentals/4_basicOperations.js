// Basic operators, maths

// We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.

// Terms: “unary”, “binary”, “operand”

// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;

x = -x;
console.log(x); // -1, unary negation was applied

// An operator is binary if it has two operands. The same minus exists in binary form as well:
let x1 = 1,
  y = 3;
console.log(y - x1); // 2, binary minus subtracts values

//* Maths

/*
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
*/

//* Remainder %

// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b.

// For instance:

console.log(5 % 2); // 1, the remainder of 5 divided by 2
console.log(8 % 3); // 2, the remainder of 8 divided by 3
console.log(8 % 4); // 0, the remainder of 8 divided by 4

//* Exponentiation **

// The exponentiation operator a ** b raises a to the power of b.
// In school maths, we write that as ab.

// For instance:
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16

// For example, a square root is an exponentiation by ½:

console.log(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic ro

//* String concatenation with binary+

let s = "my" + "string";
console.log(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.
console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"

// See, it doesn’t matter whether the first operand is a string or the second one.
console.log(2 + 2 + "1"); // "41" and not "221"
console.log("1" + 2 + 2); // "122" and not "14"

// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// Here’s the demo for subtraction and division:

console.log(6 - "2"); // 4, converts '2' to a number
console.log("6" / "2"); // 3, converts both operands to numbers

//* Numeric conversion, unary +

/*
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
*/

// No effect on numbers
let x2 = 1;
console.log(+x2); // 1

let y2 = -2;
console.log(+y2); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

// The binary plus would add them as strings:

// let apples = "2";
// let oranges = "3";

// console.log(apples + oranges); // "23", the binary plus concatenates strings

let apples = "2";
let oranges = "3";

console.log(+apples + +oranges); // 5

// Operator precedence
/*
14	unary plus	+
14	unary negation	-
13	exponentiation	**
12	multiplication	*
12	division	/
11	addition	+
11	subtraction	-
2	assignment	=
*/

//* Assignment
// Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

// That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

let x3 = 2 * 2 + 1;
console.log(x3); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0

//* Chaining assignments

// Another interesting feature is the ability to chain assignments:
let a1, b1, c1;

a1 = b1 = c1 = 2 + 2;

console.log(a1); // 4
console.log(b1); // 4
console.log(c1); // 4

// Once again, for the purposes of readability it’s better to split such code into few lines:

// c1= 2 + 2;
// b1 = c1;
// a1 = c1;

//* Modify-in-place
// We often need to apply an operator to a variable and store the new result in that same variable.

// For example:
// let n = 2;
// n = n + 5;
// n = n * 2;

// This notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log(n); // 14

// let n = 2;
// n *= 3 + 5; // right part evaluated first, same as n *= 8
// console.log( n ); // 16

//* Increment/decrement

// Increasing or decreasing a number by one is among the most common numerical operations.
// So, there are special operators for it:

// Increment ++ increases a variable by 1:

// let counter1 = 2;
// counter1++; // works the same as counter = counter + 1, but is shorter
// console.log(counter); // 3

// // Decrement -- decreases a variable by 1:

// let counter2 = 2;
// counter2--; // works the same as counter = counter - 1, but is shorter
// console.log(counter2); // 1

//* Important:
// Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

// The operators ++ and -- can be placed either before or after a variable.

// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter

let counter3 = 10;

console.log(counter3++); // prints 10 and then increments counter to 11
console.log(counter3); // prints 11

console.log(++counter3); // increments counter to 12 and then prints 12
console.log(counter3); // prints 12

//* Bitwise operators

/*
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

*/

// let x = 10;  // 1010 in binary
// let y = 5;   // 0101 in binary

// console.log(x & y);  // prints 0 (0000 in binary)
// console.log(x | y);  // prints 15 (1111 in binary)
// console.log(x ^ y);  // prints 15 (1111 in binary)
// console.log(~x);     // prints -11 (11110101 in binary)
// console.log(x << 1); // prints 20 (10100 in binary)
// console.log(x >> 1); // prints 5 (0101 in binary)
