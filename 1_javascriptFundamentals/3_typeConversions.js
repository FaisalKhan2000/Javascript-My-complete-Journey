//* Type Conversion

/*
Type conversion, also known as type casting, is the process of converting a value from one data type to another data type. In JavaScript, type conversion can be performed using the String(), Number(), and Boolean() functions. 
*/

//* String Conversion

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(value); // string

// String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

//* Numeric Conversion

// Numeric conversion happens in mathematical functions and expressions automatically.

// For example, when division / is applied to non-numbers:
console.log("6" / "2");

// We can use the Number(value) function to explicitly convert a value to a number:
let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

// If the string is not a valid number, the result of such a conversion is NaN. For instance:
let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN, conversion failed
/*
Numeric conversion rules:

Value	Becomes…
undefined	NaN
null	0
true and false	1 and 0

string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
*/

console.log(Number("   123   ")); // 123
console.log(Number("123z")); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

//* Boolean Conversion
/*
Boolean conversion is the simplest one.

It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.
*/

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true

// Please note: the string with zero "0" is true
