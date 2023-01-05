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

// let user = [];
// user[99999] = 5;
// user.age = 25;

// console.log(user);
// console.log(user[99999]);

let ar = [];

ar[0] = "hello";
ar[1000] = "hi";
ar[999] = "hi";
console.log(ar);

// [ 'hello', <998 empty items>, 'hi', 'hi', test: 5 ]

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

// The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

// For instance, a single element with a large index gives a big length:

let fruits2 = [];
fruits2[123] = "Apple";

console.log(fruits2.length); //124

let fruits3 = [];
fruits3[0] = 1;
fruits3[1] = 1;
fruits3[2] = 1;
fruits3[3] = 1;
fruits3[4] = 1;
// .
// .
// .
// .
fruits3[1000] = 1;

console.log(fruits3);

// The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

console.log(fruits3.length); //1001

// Note that we usually don’t use arrays like that.

// Another interesting thing about the length property is that it’s writable.

// If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // truncate to 2 elements
// alert( arr ); // [1, 2]

// arr.length = 5; // return length back
// alert( arr[3] ); // undefined: the values do not return

// So, the simplest way to clear the array is: arr.length = 0;.

//* new Array();

// There is one more syntax to create an array:

// let arr3 = new Array("Apple", "Mango", "etc");
// console.log(arr3); [ 'Apple', 'Mango', 'etc' ]

let arr3 = new Array(2); // will it create an array of [2] ?
console.log(arr3[0]); // undefined! no elements.
console.log(arr3.length); // length 2

console.log(arr3); // [ <2 empty items> ]
// To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.

//* Multidimensional arrays

// Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][2]);

//* toString

// Arrays have their own implementation of toString method that returns a comma-separated list of elements.

// let arr = [1, 2, 3];

// alert( arr ); // 1,2,3
// alert( String(arr) === '1,2,3' ); // true

// // Also, let’s try this:

// alert( [] + 1 ); // "1"
// alert( [1] + 1 ); // "11"
// alert( [1,2] + 1 ); // "1,21"

// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

// When the binary plus "+" operator adds something to a string, it converts it to a string as well, so the next step looks like this:

// alert( "" + 1 ); // "1"
// alert( "1" + 1 ); // "11"
// alert( "1,2" + 1 ); // "1,21"

//*    Don’t compare arrays with ==

// It is generally not recommended to use the equality operator (==) to compare arrays in JavaScript. This is because the operator compares the references of the arrays, rather than their contents.

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 == arr2);  // Output: false

// In the example above, arr1 and arr2 have the same contents, but they are stored at different memory locations, so the equality operator returns false.

// To compare the contents of two arrays, you can use the .every() method, which returns true if every element in the array passes the provided test function. For example:

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// let areEqual = arr1.every((val, index) => val === arr2[index]);
// console.log(areEqual);  // Output: true

// Alternatively, you can use the JSON.stringify() function to convert the arrays to strings and then compare the strings.

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(JSON.stringify(arr1) === JSON.stringify(arr2));  // Output: true

// It's important to note that this method may not work for arrays that contain objects or other non-primitive values. In these cases, you will need to use a more specialized method for comparing the contents of the arrays.
