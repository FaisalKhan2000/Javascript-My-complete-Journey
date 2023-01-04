//* Constructor function

// Constructor functions technically are regular functions. There are two conventions though:
// They are named with capital letter first.
// They should be executed only with "new" operator.

function User(name, age) {
  this.name = name;
  this.age = age;
  this.isAdmin = false;
}

let user = new User("faisal", 30);
console.log(user);
console.log(user.name);
console.log(user.age);
user.isAdmin = true;
console.log(user.isAdmin);

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.

// In other words, new User(...) does something like:
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.age = age;
  this.isAdmin = false;

  // return this;  (implicitly)
}

//* Immediately creating a function and executing it

// create a function and immediately call it with new
let user = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();
