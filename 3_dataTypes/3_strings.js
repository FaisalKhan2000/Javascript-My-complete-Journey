//* strings

// a string is a sequence of characters that can be used to represent text, numbers, or symbols. Strings are enclosed in quotation marks (either single or double).

"Hello, world!";
"Hello, world!";
"123";
"true";
"null";

// You can use the + operator to concatenate (combine) two or more strings.

let str1 = "Hello";
let str2 = "world";
let str3 = str1 + ", " + str2 + "!";

console.log(str3); // "Hello, world!"

// You can also use string interpolation to embed variables or expressions in a string.

let name = "John";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message); // "Hello, my name is John and I am 30 years old."

// strings are immutable, which means that once you create a string, you cannot change it. However, you can create a new string based on an existing string by using string methods such as slice(), substring(), or replace().

let strx = "Hello, world!";
let newStr = strx.replace("world", "JavaScript");

console.log(strx); // "Hello, world!"
console.log(newStr); // "Hello, JavaScript!"

// JavaScript provides many built-in methods for working with strings, such as length, toUpperCase(), and toLowerCase(). You can also use regular expressions to perform more advanced string manipulation.

//* Special characters in strings

/*


you can use special characters in strings by using escape sequences. An escape sequence is a combination of characters that represents a special character.

Here is a list of some common escape sequences:

\' - single quote
\" - double quote
\\ - backslash
\n - new line
\r - carriage return
\t - tab
\b - backspace
\f - form feed


*/

let str4 = "This is a string with a 'single quote' and a \"double quote\".";

console.log(str4); // Output: This is a string with a 'single quote' and a "double quote".

// You can also use template literals, which are strings that are surrounded by the backtick (`) character, to include special characters in a string without having to use escape sequences.

let str5 = `This is a string with a 'single quote' and a "double quote".`;

console.log(str5);
// Output: This is a string with a 'single quote' and a "double quote".

//* Accessing characters

// let str = "Hello, World!";

// console.log(str[0]);  // Output: "H"
// console.log(str[1]);  // Output: "e"
// console.log(str[2]);  // Output: "l"
// console.log(str[3]);  // Output: "l"
// console.log(str[4]);  // Output: "o"
// console.log(str[5]);  // Output: ","
// console.log(str[str.length - 1]);  // Output: "!"

// let str = "Hello, World!";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// Output: "H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"

//* string methods

/* 


there are several methods available for working with strings. Here are some of the most commonly used string methods:

    charAt(): Returns the character at a specified index in a string.

    concat(): Concatenates (joins) two or more strings.
    
    endsWith(): Determines whether a string ends with the characters of a specified string.

    includes(): Determines whether a string contains the characters of a specified string.

    indexOf(): Returns the index within the calling string object of the first occurrence of the specified value, starting the search at fromIndex.

    lastIndexOf(): Returns the index within the calling string object of the last occurrence of the specified value, or -1 if not found.

    length: Returns the length of a string.

    replace(): Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

    slice(): Extracts a part of a string and returns a new string.

    split(): Splits a string into an array of substrings.
    
    startsWith(): Determines whether a string begins with the characters of a specified string.

    substr(): Returns the characters in a string beginning at the specified location through the specified number of characters.

    substring(): Returns the characters in a string between two specified indices.
    
    toLowerCase(): Converts a string to lowercase letters.

    toUpperCase(): Converts a string to uppercase letters.

    trim(): Removes whitespace from the beginning and end of a string.



*/

let str = "Hello, World!";

console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.trim()); // Output: "Hello, World!"
console.log(str.includes("World")); // Output: true
console.log(str.indexOf("World")); // Output: 7
console.log(str.replace("World", "Universe")); // Output: "Hello, Universe!"
