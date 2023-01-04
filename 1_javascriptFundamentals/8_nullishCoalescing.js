//* Nullish coalescing operator '??'

/* 
The nullish coalescing operator (??) is a new operator introduced in JavaScript that is used to return the right-hand operand when the left-hand operand is null or undefined, and the left-hand operand otherwise. It is often used as a shorthand way of providing a default value for a variable that may be null or undefined
*/

// Here is an example of using the nullish coalescing operator:

let x1 = null;
let y1 = undefined;
let z1 = "hello";

let a1 = x1 ?? "default value"; // "default value"
let b1 = y1 ?? "default value"; // "default value"
let c1 = z1 ?? "default value"; // "hello"

/* 
The logical OR operator (||) is a boolean operator that returns the left-hand operand if it is truthy, and the right-hand operand if the left-hand operand is falsy. It is often used as a shorthand way of providing a default value for a variable that may be falsy (e.g., null, undefined, 0, "", etc.).
*/
// Here is the same example using the logical OR operator:

let x2 = null;
let y2 = undefined;
let z2 = "hello";

let a2 = x2 || "default value"; // "default value"
let b2 = y2 || "default value"; // "default value"
let c2 = z2 || "default value"; // "hello"

// Another Example

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
