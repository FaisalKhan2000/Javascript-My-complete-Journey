/* 
* Objects
As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).
In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.
An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.
*/

const { multiply } = require("lodash");

// An Empty Object ("Empty cabinet") can be created using one of the two syntax:

// let user1 = new Object();
// let user2 = {};

// Literal and properties
// we can immediately put some properties into {...} as "key-value" pairs:

// let user = {
//   name: "john",
//   age: 30,
// };

// Accessing the properties
// user.name; // John
// user.age; // 30

// Removing a property
// delete user.age;

// We can also create multiword properties names, but they must be quoted

// let user3 = {
//   name: "John",
//   age: 30,
//   "like birds": true,
// };

// user3.like birds = true --> Error for multi words properties . syntax does not work

// Square brackets

// user3["like birds"] = false;
// delete user3["like birds"];

// let key = "like birds";

// user[key] = true;

// user.key = false; // doesn't work

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// let fruit = "apple";

// let bag = {
//   [fruit]: 5,
// };

// Essentially, that works the same as:

// let fruit = "banana";
// let bag = {};

// take property name from the fruit variable
// bag[fruit] = 5; // { banana: 5 }

// …But looks nicer.

// We can use more complex expressions inside square brackets:

// let fruit = "apple";
// let bag = {
//   [fruit + "computers"]: 5, // bag.appleComputers = 5
// };

// Property value shorthand
// In real code, we often use this way

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     //...Other properties
//   };
// }

// we can even execute the above code in this way
function makeUser(name, age) {
  return {
    name,
    age,
    //...Other properties
  };
}

// let myUser = makeUser("John", 30);

// Property existence test, “in” operator
// "key" in object;

// console.log("age" in myUser);
// console.log("name" in myUser);

//* for...in Loop

// for (key in object) {
//   // executes the body for each key among object properties
// }

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
}

//* Ordered like an object

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// In the above example we can see that keys are printed in the "numerical" order so, this can cause issue if you want to print the keys in the order of creation
// we can do that just " "  the keys

/* 
* Summary
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
*/

// Check for emptiness
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// Sum object properties
function sum(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum = sum + salaries[key];
  }
  return sum;
}

console.log(sum(salaries));

// Multiply numeric property values by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu));
