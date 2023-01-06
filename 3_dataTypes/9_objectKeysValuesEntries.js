//* Object.keys()

// The Object.keys() method is a built-in JavaScript method that returns an array of a given object's own enumerable property names.

const object1 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(object1)); // ['a', 'b', 'c']

/*

In this example, we have an object with three properties: a, b, and c. We call Object.keys() on the object and log the returned array to the console. The output is ['a', 'b', 'c'], which are the enumerable property names of the object.

Object.keys() only returns the own enumerable properties of an object, which means that it does not include properties that are inherited from the object's prototype.

You can use Object.keys() to iterate over the enumerable properties of an object and perform a task for each property. For example:

*/

const object2 = { a: 1, b: 2, c: 3 };
Object.keys(object2).forEach((key) => {
  console.log(key, object2[key]);
});

// a 1
// b 2
// c 3

//* Object.values()

/* 

The Object.values() method is a built-in JavaScript method that returns an array of a given object's own enumerable property values.

Here is an example of how to use Object.values():

*/

const object3 = { a: 1, b: 2, c: 3 };
console.log(Object.values(object3)); // [ 1, 2, 3 ]

const object4 = { a: 1, b: 2, c: 3 };
Object.values(object4).forEach((value) => {
  console.log(value);
});

// 1
// 2
// 3

//* Object.entries()

/* 

The Object.entries() method is a built-in JavaScript method that returns an array of a given object's own enumerable property [key, value] pairs.

Here is an example of how to use Object.entries():

*/

const object5 = { a: 1, b: 2, c: 3 };
console.log(Object.entries(object5)); // [['a', 1], ['b', 2], ['c', 3]]

const object6 = { a: 1, b: 2, c: 3 };
Object.entries(object6).forEach(([key, value]) => {
  console.log(key, value);
});

// a 1
// b 2
// c 3
