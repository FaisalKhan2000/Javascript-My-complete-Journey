//* Data types

// There are 7 datatypes in javascript (6 primitive and 1 non-primitive (Object))

// 1. Number: A numerical value. In JavaScript, all numbers are stored as 64-bit floating-point numbers, also known as "doubles."
// 2. String: A sequence of characters used to represent text. Strings can be wrapped in single or double quotes.
// 3. Boolean: A value that can either be true or false.
// 4. Null: A value that represents the absence of a value.
// 5. Undefined: A value that indicates that a variable has been declared but has not yet been assigned a value.
// 6. Object: A collection of key-value pairs that can represent complex data structures such as arrays, functions, and other objects.
// 7. Symbol: A data type introduced in ECMAScript 6 that is used to create unique identifiers for objects.

let num = 10; // number
let str = "hello"; // string
let bool = true; // boolean
let nothing = null; // null
let undef; // undefined
let obj = {}; // object
let sym = Symbol(); // symbol

//* Number

let n = 123;
n = 12.345;

// The number type represents both integer and floating point numbers.

// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// 1. Infinity

// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

// We can get it as a result of division by zero:
console.log(1 / 0); //Infinity

// Or just reference it directly:
console.log(Infinity); // Infinity

// 2. NaN
// Represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

console.log("not a number" / 2); // NaN

// NaN is sticky. Any further mathematical operation on NaN returns NaN:
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN
console.log(NaN ** 0); // 1
// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1

//* String --> A string in JavaScript must be surrounded by quotes.

let str1 = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str1}`;

/*In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`. */

//* Boolean(logical type)

// The boolean type has only two values: true and false.

// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

console.log(isGreater); // true (the comparison result is "yes")

//* null

// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:

let age = null;

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.

//* undefined

// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined:
let age1;
console.log(age1); //undefined
