//*Arrays

/*


Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

There exists a special data structure named Array, to store ordered collections.



*/

//*  Declaration

// There are two syntaxes for creating an empty array:
let arr1 = new Array();
let arr2 = [];

// Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

let fruits = ["Apple", "Orange", "Plum"];

// Array elements are numbered, starting with zero.

// We can get an element by its number in square brackets:
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

// We can replace an element:
fruits[2] = "Pear"; // now ["Apple", "Orange", "Pear"]

// …Or add a new one to the array:
fruits[3] = "Lemon"; // now ["Apple", "Orange", "Pear", "Lemon"]
console.log(fruits);

// The total count of the elements in the array is its length:
console.log(fruits.length);

// We can also use alert to show the whole array.

// let fruits = ["Apple", "Orange", "Plum"];
// alert(fruits); // Apple,Orange,Plum

// An array can store elements of any type.

// mix of values
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];

// get the object at index 1 and then show its name
console.log(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello

// Get last elements with “at”
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1)); // Lemon

//* Methods pop/push, shift/unshift

//* Methods that work with the end of the array:
//* 1.pop

console.log(fruits.pop()); // Lemmon
console.log(fruits); // ["Apple", "Orange", "Pear"];

//* 2.push
fruits.push("Pear");
console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Pear' ]

//* Methods that work with the beginning of the array:

//* shift
console.log(fruits.shift()); // Apple
console.log(fruits); // [ 'Orange', 'Pear', 'Pear' ]

//* unshift

fruits.unshift("Apple");
console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Pear' ]

// Methods push and unshift can add multiple elements at once:
// fruits.push("Orange", "Peach");
// fruits.unshift("Pineapple", "Lemon");

//* Internals

/*



An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.

Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.

For instance, it is copied by reference:



*/

let fruits1 = ["Banana"];

let arrz = fruits1; // copy by reference (two variables reference the same array)

console.log(arrz === fruits1); // true

arrz.push("Pear"); // modify the array by reference

console.log(fruits1); // Banana, Pear - 2 items now

//* Performance

// Methods push/pop run fast, while shift/unshift are slow.
// https://javascript.info/array#performance

// Why is it faster to work with the end of an array than with its beginning? Let’s see what happens during the execution:

// fruits.shift(); // take 1 element from the start

/*

It’s not enough to take and remove the element with the index 0. Other elements need to be renumbered as well.

The shift operation must do 3 things:

Remove the element with the index 0.
Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
Update the length property.

The more elements in the array, the more time to move them, more in-memory operations.

The similar thing happens with unshift: to add an element to the beginning of the array, we need first to move existing elements to the right, increasing their indexes.

And what’s with push/pop? They do not need to move anything. To extract an element from the end, the pop method cleans the index and shortens length.

The actions for the pop operation:
fruits.pop(); // take 1 element from the end

The pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast.

The similar thing with the push method.


*/

fruits.pop();

//*   Loops

// One of the oldest ways to cycle array items is the for loop over indexes:

//* 1. for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Apple
// Orange
// Pear

//*   for..of
for (const fruit of fruits) {
  console.log(fruit);
}

// Apple
// Orange
// Pear

//*   for..in

// Technically, because arrays are objects, it is also possible to use for..in
for (const key in fruits) {
  console.log(fruits[key]);
}
// Apple
// Orange
// Pear

//* A word about “length”
// .
// .
// .
// .
// .
