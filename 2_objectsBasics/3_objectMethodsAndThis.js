/*
//* Object Methods and this

// Method 1 : first Add and then declare
let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("Hello!");
};

user.sayHi();

// Method 2 : first declare the add
function welcomeUser() {
  console.log("welcome user!");
}

user.welcomeUser = welcomeUser;



// Method Shorthand

user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log("Hello");
  },
};

console.log(user);

*/
// This in methods

user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(`Hello ${user.name}`);
  },
};

user.sayHi();

// Task1 : Create a Calculator
let calculator = {
  a: 2,
  b: 3,

  read() {
    return `The two numbers are ${this.a} and ${this.b}`;
  },

  sum() {
    return this.a + this.b;
  },

  multi() {
    return this.a * this.b;
  },
};

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.multi());
