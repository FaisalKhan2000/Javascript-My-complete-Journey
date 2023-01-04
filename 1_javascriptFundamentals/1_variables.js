// In JavaScript, a variable is a container for a value that can be changed at any time. Variables are declared using the var, let, or const keywords.

// The var keyword is used to declare variables that are either global or local to a function. It is recommended to avoid using var as it is not as strict as let and const and can lead to unexpected behavior.

// The let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block of code in which they are defined.

// The const keyword is used to declare variables that are read-only. Once a variable is declared with const, it cannot be reassigned a new value.

// Here's an example of declaring variables with let and const:

let x = 10;
const y = 20;

x = 30; // valid
// y = 40; // error: y is read-only

//* Tasks

// task 1 : Working with variables

let admin, name;

name = "John";
admin = name;

console.log(admin);

// task 2 : Giving the right name
let ourPlanetName = "earth";
let currentUserName = "John";

// task 3 : Uppercase const

const BIRTHDAY = "11.01.2000";
const AGE = someCode(BIRTHDAY);
