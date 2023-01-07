//* Destructuring assignment

/*

The two most used data structures in JavaScript are Object and Array.

Objects allow us to create a single entity that stores data items by key.
Arrays allow us to gather data items into an ordered list.
Although, when we pass those to a function, it may need not be an object/array as a whole. It may need individual pieces.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

Destructuring also works great with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

*/

//* Array destructuring

// we have an array with the name and surname
let arr1 = ["John", "Smith"];
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName1, lastName1] = arr1;

console.log(firstName1); // John
console.log(lastName1); // Smith

// Now we can work with variables instead of array members.

// It looks great when combined with split or other array-returning methods:

let [firstName2, lastName2] = "John Smith".split(" ");
console.log(firstName2); // John
console.log(lastName2); // Smith

//* “Destructuring” does not mean “destructive”.

// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.

// It’s just a shorter way to write:
// let [firstName3, lastName3] = arr1;
let firstName3 = arr1[0];
let lastName3 = arr1[1];

//* Ignore elements using commas

// Unwanted elements of the array can also be thrown away via an extra comma:
// second element is not needed
let [firstName4, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(title);

//* Works with any iterable on the right-side
// …Actually, we can use it with any iterable, not only arrays:

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

//* Assign to anything at the left-side

// We can use any “assignables” on the left side.
// For instance, an object property:
let user = {};
[user.name, user.surname, user.age] = "John Smith 30".split(" ");

console.log(user); // {name: 'John', surname: 'Smith', age: '30'}
console.log(user.name);
console.log(user.surname);
console.log(user.age);

// Looping with .entries()

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// The similar code for a Map is simpler, as it’s iterable:

let map = new Map([
  ["name", "John"],
  ["age", "30"],
]);

console.log(map);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

//* Swap variables trick

// There’s a well-known trick for swapping values of two variables using a destructuring assignment:
let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
console.log(`New Admin : ${admin} and New Guest : ${guest}`);
// New Admin : Jane and New Guest : Pete

// Here we create a temporary array of two variables and immediately destructure it in swapped order.

// We can swap more than two variables this way.

//* The rest ‘…’

// Usually, if the array is longer than the list at the left, the “extra” items are omitted.

// For example, here only two items are taken, and the rest is just ignored:

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1);
console.log(name2);
// Further items aren't assigned anywhere
// If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

let [name3, name4, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(name3); // Julius
console.log(name4); // Caesar
console.log(rest); // ['Consul', 'of the Roman Republic']

//* Default values

// If the array is shorter than the list of variables at the left, there’ll be no errors. Absent values are considered undefined:

// default values
let [name5 = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name5); // Julius (from array)
console.log(surname); // Anonymous (default used)

// ------------------------------------------------------------------------------------------

//* Object destructuring

/*
The destructuring assignment also works with objects.

The basic syntax is:

let {var1, var2} = {var1:…, var2:…}
We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.


*/

let options = {
  title1: "Menu",
  width1: 100,
  height1: 200,
};

let { title1, width1, height1 } = options;

console.log(title1); // Menu
console.log(width1); // 100
console.log(height1); // 200

// Properties options.title, options.width and options.height are assigned to the corresponding variables.

// The order does not matter. This works too:
// changed the order in let {...}
let { height2, width2, title2 } = { title2: "Menu", height2: 200, width2: 100 };

console.log(title2); // Menu
console.log(width2); // 100
console.log(height2); // 200

// The pattern on the left side may be more complex and specify the mapping between properties and variables.

// If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:

// { sourceProperty: targetVariable }
let options3 = {
  title3: "Menu",
  width3: 100,
  height3: 200,
};
let { width3: w, height3: h, title3 } = options3;
// width -> w
// height -> h
// title -> title
console.log(title3); // Menu
console.log(w); // 100
console.log(h); // 200

//* For potentially missing properties we can set default values using "=", like this:

// let options = {
//   title: "Menu"
// };

// let {width = 100, height = 200, title} = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200

//* Nested destructuring

// If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

// In the code below options has another object in the property size and an array in the property items. The pattern on the left side of the assignment has the same structure to extract values from them:

let optionsx = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    width,
    height,
  },
  items: [item1, item2], // assign items here
  titlex = "Menu", // not present in the object (default value is used)
} = optionsx;

console.log(titlex); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut
