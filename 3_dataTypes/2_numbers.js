//* Numbers

/*
In modern JavaScript, there are two types of numbers:

Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. These are numbers that we’re using most of the time, and we’ll talk about them in this chapter.

BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1), as we mentioned earlier in the chapter Data types. As bigints are used in few special areas, we devote them a special chapter BigInt.

*/

//* More ways to write a number

let billion = 1000000000;

// we also can use underscore _ as the separator

let billion1 = 1_000_000_000;
console.log(billion);

// In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

let billion2 = 1e9; // 1 billion, literally: 1 and 9 zeroes
console.log(billion2);
console.log(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

// In other words, e multiplies the number by 1 with the given zeroes count.

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

// Now let’s write something very small. Say, 1 microsecond (one millionth of a second):

let mcs1 = 0.000001;

let mcs2 = 1e-6;

console.log(mcs1, mcs2);

// In other words, a negative number after "e" means a division by 1 with the given number of zeroes:

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

//* Hex, binary and octal numbers

// Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: 0x and then the number.

// hexadecimal to decimal
console.log(0xff);
console.log(0xff);

// binary to decimal
console.log(0b11111111);

// Octal to decimal
console.log(0o377);

// There are only 3 numeral systems with such support. For other numeral systems, we should use the function parseInt (which we will see later in this chapter).

//* toString(base)

// The method num.toString(base) returns a string representation of num in the numeral system with the given base.

let num = 255;
console.log(num.toString(16)); // to hexadecimal --> ff
console.log(num.toString(2)); // to binary --> 11111111
console.log(num.toString(8)); // to octal --> 377
console.log(num.toString(10)); // to decimal --> 255

console.log((77).toString(2)); // 77..tostring(2) --> it coverted to (77). by eslint

// Two dots to call a method

// Please note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.

//* Rounding

/*
One of the most used operations when working with numbers is rounding.

There are several built-in functions for rounding:

    Math.floor
    Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

    Math.ceil
    Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

    Math.round
    Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

    Math.trunc (not supported by Internet Explorer)
    Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

Here’s the table to summarize the differences between them:
-->   Math.floor	Math.ceil	Math.round	Math.trunc
3.1        3	        4	         3	        3
3.6        3	        4	         4	        3
-1.1      -2	       -1	        -1	       -1
-1.6      -2	       -1	        -2	       -1


These functions cover all of the possible ways to deal with the decimal part of a number. But what if we’d like to round the number to n-th digit after the decimal?

For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23.

There are two ways to do so:


*/

//* 1. Multiply-and-divide.

// For example, to round the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back.

let num1 = 1.23456;
console.log(Math.round(num1 * 100) / 100); // 1.23

//* 2. .toFixed(n)

// The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.

let num2 = 1.23456;
console.log(num2.toFixed(2)); // "1.23"
console.log(Number(num2.toFixed(2))); // 1.23
console.log(+num2.toFixed(2)); // 1.23

let num3 = 12.34;
console.log(num3.toFixed(1)); // "12.3" -> works same way as Math.round()

let num4 = 12.36;
console.log(num4.toFixed(1)); // "12.4" -> works same way as Math.round()

//* Imprecise calculations

// Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number:

// 52 of them are used to store the digits,
// 11 of them store the position of the decimal point, and
// 1 bit is for the sign.

// If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity:

console.log(1e500); // Infinity

// What may be a little less obvious, but happens quite often, is the loss of precision.

// Consider this (falsy!) equality test:
console.log(0.1 + 0.2 == 0.3);

// That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3, we get false.

// Strange! What is it then if not 0.3?

console.log(0.1 + 0.2);

// The numeric format IEEE-754 solves this by rounding to the nearest possible number. These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.

console.log((0.1).toFixed(20)); // 0.10000000000000000555

// And when we sum two numbers, their “precision losses” add up.

// That’s why 0.1 + 0.2 is not exactly 0.3.

// Can we work around the problem? Sure, the most reliable method is to round the result with the help of a method toFixed(n):

let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // "0.30"
console.log(+sum.toFixed(2)); // 0.30

console.log(+sum.toFixed(2) === 0.3); // true

// We also can temporarily multiply the numbers by 100 (or a bigger number) to turn them into integers, do the maths, and then divide back. Then, as we’re doing maths with integers, the error somewhat decreases, but we still get it on division:

console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
console.log((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
// So, multiply/divide approach reduces the error, but doesn’t remove it totally.

// Sometimes we could try to evade fractions at all. Like if we’re dealing with a shop, then we can store prices in cents instead of dollars. But what if we apply a discount of 30%? In practice, totally evading fractions is rarely possible. Just round them to cut “tails” when needed.

//* Tests: isFinite and isNaN

/*

Remember these two special numeric values?

Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
NaN represents an error.
They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:

*/

//* 1. isNaN()

// isNaN(value) converts its argument to a number and then tests it for being NaN:

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

// But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. The value NaN is unique in that it does not equal anything, including itself:

console.log(NaN === NaN); // false

// let value = "hello";

// if (isNaN(value)) {
//   console.log(value + " is not a number");
// } else {
//   console.log(value + " is a number");
// }

// hello is not a number

// let value = [1, 2, 3];

// if (isNaN(value)) {
//   console.log(value + " is not a number");
// } else {
//   console.log(value + " is a number");
// }
// 1,2,3 is not a number

//* 1. isFinite()

let value = 100;

if (isFinite(value)) {
  console.log(value + " is a finite number");
} else {
  console.log(value + " is not a finite number");
}

// 100 is a finite number

// let value = Infinity;

// if (isFinite(value)) {
//   console.log(value + " is a finite number");
// } else {
//   console.log(value + " is not a finite number");
// }

// Infinity is not a finite number

//* Number.isNaN() and Number.isFinite()

// Number.isNaN and Number.isFinite methods are the more “strict” versions of isNaN and isFinite functions. They do not autoconvert their argument into a number, but check if it belongs to the number type instead.

// Number.isNaN() and Number.isFinite() are two methods that were introduced in ECMAScript 6 (also known as ECMAScript 2015) to improve the accuracy and reliability of checking for NaN and finite values, respectively.

// Number.isNaN() is a method that determines whether a value is the special value NaN (Not-A-Number). It is used to check whether a value is NaN or not.

// Note the difference:
console.log(Number.isNaN("str")); // false, because "str" belongs to the string type, not the number type
console.log(isNaN("str")); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

console.log(Number.isFinite("123")); // false, because "123" belongs to the string type, not the number type
console.log(isFinite("123")); // true, because isFinite converts string "123" into a number 123

//* Object.is()

/*

Object.is() is another method that can be used to compare values in JavaScript. It was also introduced in ECMAScript 6 (also known as ECMAScript 2015).

Object.is() is similar to the strict equality operator (===), but it has a couple of important differences:

Object.is() considers NaN to be equal to itself, whereas === considers NaN to be unequal to itself.

Object.is() considers positive and negative zeros to be equal, whereas === considers them to be unequal.

Here's an example of how you might use Object.is():



*/

// let value1 = NaN;
// let value2 = NaN;

// console.log(Object.is(value1, value2)); // true
// console.log(value1 === value2); // false

// In this example, Object.is() returns true because both value1 and value2 are NaN. However, === returns false because it considers NaN to be unequal to itself.

// You can use Object.is() to compare any two values, including primitives (such as numbers, strings, and booleans) and objects.

let value1 = 100;
let value2 = "100";

console.log(Object.is(value1, value2)); // false
console.log(value1 === value2); // false

let obj1 = { foo: "bar" };
let obj2 = { foo: "bar" };

console.log(Object.is(obj1, obj2)); // false
console.log(obj1 === obj2); // false

// In these examples, Object.is() returns false because the values being compared are not strictly equal. === also returns false in these cases because it performs strict equality checks.

//* parseInt and parseFloat

// parseInt() is a JavaScript function that converts a string to an integer. It is used to convert a string representation of a number to a number.

// Here's an example of how you might use it:

// let str = "123";
// let num = parseInt(str);

// console.log(typeof str); // "string"
// console.log(typeof num); // "number"

// In this example, parseInt() converts the string "123" to the number 123. The typeof operator is then used to show that str is a string and num is a number.

// parseInt() takes two arguments: the string to be converted and the base of the number represented by the string. The base is an optional argument and is usually omitted when converting decimal numbers.

// let str = "1010";
// let num = parseInt(str, 2);  // base 2 (binary)

// console.log(num);  // 10

// In this example, parseInt() converts the binary string "1010" to the decimal number 10. The base (2) is specified as the second argument to indicate that the string represents a binary number.

// Note that parseInt() only works for strings that represent integers. If the string contains a decimal point or any other non-numeric characters, parseInt() will stop parsing at that point and return the result up to that point.

// let str = "123.45";
// let num = parseInt(str);

// console.log(num);  // 123

// In this example, parseInt() stops parsing at the decimal point and returns the result up to that point (123). The decimal portion of the string (".45") is ignored.

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5

console.log(parseInt("12.3")); // 12, only the integer part is returned
console.log(parseFloat("12.3.4")); // 12.3, the second point stops the reading

console.log(parseInt("a123")); // NaN, the first symbol stops the process

// TODO: for more javascript Math functions refer this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
