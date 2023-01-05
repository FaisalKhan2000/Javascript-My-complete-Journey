"use strict";

//* Array methods

// Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups.

//* Add/remove items

/*


We already know methods that add and remove items from the beginning or the end:

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
Here are a few others.

*/

//* splice

// How to delete an element from the array?
// The arrays are objects, so we can try to use delete:

let arr = ["I", "go", "home"];
delete arr[1]; // [ 'I', <1 empty item>, 'home' ]

console.log(arr[1]); // undefined
console.log(arr.length); // 3

/*
The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

So, special methods should be used.

The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

The syntax is:

!arr.splice(start[, deleteCount, elem1, ..., elemN])


It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

This method is easy to grasp by examples.

Let’s start with the deletion:
*/

let arr1 = ["I", "study", "JavaScript"];
arr1.splice(1, 1); // from index 1 remove 1 element

console.log(arr1); // ["I", "JavaScript"];

// In the next example we remove 3 elements and replace them with the other two:

let arr2 = ["I", "study", "JavaScript", "right", "now"];
arr2.splice(0, 3, "Let's", "dance"); // remove 3 first elements and replace them with another

console.log(arr2); // ["Let's", "dance", "right", "now"];
console.log(arr2.length); // 4

// Here we can see that splice returns the array of removed elements:

let arr3 = ["I", "study", "JavaScript", "right", "now"];
let removed = arr3.splice(0, 2); // remove 2 first elements

console.log(removed); // "I", "study" <-- array of removed elements

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr4 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");

console.log(arr4); // [ 'I', 'study', 'complex', 'language', 'JavaScript' ]

//* Negative indexes allowed

// Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:

let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4);

console.log(arr5); // 1,2,3,4,5

//* slice

/*

The method arr.slice is much simpler than similar-looking arr.splice.

The syntax is:

arr.slice([start], [end])
It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

For instance:
*/

let arr6 = ["t", "e", "s", "t"];

console.log(arr6.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr6.slice(-2)); // s,t (copy from -2 till the end)

// We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

//* concat

/*

The method arr.concat creates a new array that includes values from other arrays and additional items.

The syntax is:

arr.concat(arg1, arg2...)
It accepts any number of arguments – either arrays or values.

The result is a new array containing items from arr, then arg1, arg2 etc.

If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

For instance:

*/

let arr7 = [1, 2];

// create an array from: arr and [3,4]
console.log(arr7.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(arr7.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr7.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

let arr8 = [1, 2];

let arrayLike1 = {
  0: "something",
  length: 1,
};

console.log(arr8.concat(arrayLike1)); // [ 1, 2, { '0': 'something', length: 1 } ]

// …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

let arr9 = [1, 2];

let arrayLike2 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(arr9.concat(arrayLike2)); // [ 1, 2, 'something', 'else' ]

//* Iterate: forEach

/*

The arr.forEach method allows to run a function for every element of the array.

The syntax:

arr.forEach(function(item, index, array) {
  // ... do something with item
});

*/

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

//* Searching in array;

/*

indexOf/lastIndexOf and includes
The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.

For instance:

*/

let arr10 = [1, 0, false];

console.log(arr10.indexOf(0)); // 1
console.log(arr10.indexOf(false)); // 2
console.log(arr10.indexOf(null)); // -1

console.log(arr10.includes(1)); // true

/*

Please note that indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.

If we want to check if item exists in the array, and don’t need the index, then arr.includes is preferred.

The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

*/

let fruits = ["Apple", "Orange", "Apple"];

console.log(fruits.indexOf("Apple")); // 0 (first Apple)
console.log(fruits.lastIndexOf("Apple")); // 2 (last Apple)

// The includes method handles NaN correctly
// A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

const arr11 = [NaN];
console.log(arr11.indexOf(NaN)); // -1 (wrong, should be 0)
console.log(arr11.includes(NaN)); // true (correct)

// That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.

//* find and findIndex/findLastIndex

/*

Imagine we have an array of objects. How do we find an object with the specific condition?

Here the arr.find(fn) method comes in handy.

The syntax is:

    let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
    });


The function is called for elements of the array, one after another:

    item is the element.
    index is its index.
    array is the array itself.

If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:

*/

let users1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user1 = users1.find((item) => item.id == 1);
console.log(user1); // { id: 1, name: 'John' }

/*

In real life arrays of objects is a common thing, so the find method is very useful.

Note that in the example we provide to find the function item => item.id == 1 with one argument. That’s typical, other arguments of this function are rarely used.

The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

Here’s an example:

*/

let users2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// Find the index of the first John
console.log(users2.findIndex((user) => user.name == "John")); // 0

// Find the index of the last John
// console.log(users2.findLastIndex((user) => user.name == "John")); // 3

//* filter

/*

The find method looks for a single (first) element that makes the function return true.

If there may be many, we can use arr.filter(fn).

The syntax is similar to find, but filter returns an array of all matching elements:

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
For instance:

*/
let users3 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users3.filter((item) => item.id < 3);

console.log(someUsers.length); // 2
console.log(someUsers); // 2

//* Transform an array

/*

Let’s move on to methods that transform and reorder an array.

map
The arr.map method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

The syntax is:

let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
For instance, here we transform each element into its length:

*/

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths); // [ 5, 7, 6 ]

let uppercase = ["Bilbo", "Gandalf", "Nazgul"].map((item) =>
  item.toUpperCase()
);
console.log(uppercase); // ["BILBO", "GANDALF", "NAZGUL"];

//* sort(fn)

/*

The call to arr.sort() sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

For instance:

*/

let arr12 = [1, 2, 15];

// the method reorders the content of arr
arr12.sort();

console.log(arr12); // [ 1, 15, 2 ]

/*

Did you notice anything strange in the outcome?

The order became 1, 15, 2. Incorrect. But why?

The items are sorted as strings by default.

Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".

To use our own sorting order, we need to supply a function as the argument of arr.sort().

The function should compare two arbitrary values and return:

*/

function compareNumeric(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

let arr13 = [2, 15, 1];
arr13.sort(compareNumeric);
console.log(arr13); // [1, 2, 15];

let arr14 = [2, 15, 1];
arr14.sort(function (a, b) {
  return a - b;
});
console.log(arr14); // [1, 2, 15];

let arr15 = [2, 15, 1];
arr15.sort((a, b) => a - b);
console.log(arr15); // [1, 2, 15];

//* reverse

// The method arr.reverse reverses the order of elements in arr.

// let arr16 = [2, 15, 1];
let arr16 = [1, 2, 3, 4, 5];
arr16.reverse();
console.log(arr16); // [1, 2, 15];

//* split and join

/*

Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

In the example below, we split by a comma followed by space:

*/

let names = "Bilbo, Gandalf, Nazgul";

let arr17 = names.split(", ");
console.log(arr17); // ["Bilbo", "Gandalf", "Nazgul"];

for (let name of arr17) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

// The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

let arr18 = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);
console.log(arr18); // [ 'Bilbo', 'Gandalf' ]

// The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

let arr19 = ["Bilbo", "Gandalf", "Nazgul"];

let str1 = arr19.join(";"); // Bilbo;Gandalf;Nazgul
let str2 = arr19.join(""); // BilboGandalfNazgul
let str3 = arr19.join(" "); // Bilbo Gandalf Nazgul

//* Reduce
