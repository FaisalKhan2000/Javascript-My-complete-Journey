//* Map and Set

/*

Till now, we’ve learned about the following complex data structures:

* Objects are used for storing keyed collections.

* Arrays are used for storing ordered collections.

But that’s not enough for real life. That’s why Map and Set also exist.

*/

//* Map

/*

Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

  * new Map() – creates the map.

  * map.set(key, value) – stores the value by the key.

  * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.

  * map.has(key) – returns true if the key exists, false otherwise.

  * map.delete(key) – removes the element (the key/value pair) by the key.

  * map.clear() – removes everything from the map.

  * map.size – returns the current element count.

*/

let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

console.log(map); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:

// alert(map);
// alert(map.get(1)); // "num1"
// alert(map.get("1")); // "str1"
// alert(map.size); // 3

//* Map can also use objects as keys.

let john = { name: "john" };

let visitorsCount = new Map();

visitorsCount.set(john, 123);

console.log(visitorsCount); // Map(1) { { name: 'john' } => 123 }

console.log(visitorsCount.get(john)); // 123

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}; // try to use an object

// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// // That's what got written!
// // alert(visitsCountObj["[object Object]"]); // 123
// console.log(visitsCountObj);

//* Iteration over Map

/*

For looping over a map, there are 3 methods:

  * map.keys() – returns an iterable for keys,

  * map.values() – returns an iterable for values,

  * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

*/

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

console.log(recipeMap);

for (const vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

for (const amount of recipeMap.values()) {
  console.log(amount);
}

for (const entry of recipeMap) {
  console.log(entry);
  // alert(entry);
}

// for (const [key, value] of Object.entries(recipeMap)) {
//   console.log(`${key}: ${value}`);
// }

recipeMap.forEach((value, key) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

//* Converting an Object to Map

// Object.entries: Map from Object

let map1 = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

console.log(map1.get("1")); // str1

// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
let obj = {
  name: "John",
  age: 30,
};

// Object.entries(obj) converts and object into key value pair which is same as Map
console.log(Object.entries(obj));

// [ [ 'name', 'John' ], [ 'age', 30 ] ]

// here object is converted into map

let map3 = new Map(Object.entries(obj));

console.log(map3.get("name")); // John
console.log(map3.get("age")); // 30

// Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.

//* Converting a map to object

let pricesMap = new Map([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

let pricesObject = Object.fromEntries(pricesMap);

console.log(pricesObject);
console.log(pricesMap);

//* Set

/*

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

  *new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.

  *set.add(value) – adds a value, returns the set itself.

  *set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.

  *set.has(value) – returns true if the value exists in the set, otherwise false.

  *set.clear() – removes everything from the set.

  *set.size – is the elements count.

The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

Set is just the right thing for that:

*/

let set = new Set();

let johnny = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(johnny);
set.add(pete);
set.add(pete);
set.add(johnny);
set.add(mary);
set.add(mary);

console.log(set);
// Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }
console.log(set.size); // w

for (const user of set) {
  console.log(user.name);
}
//John Pete Mary

//* Iteration over Set
// We can loop over a set either with for..of or using forEach:

// let set2 = new Set(["oranges", "apples", "mango"]);
let set2 = new Set();

set2.add("oranges");
set2.add("apples");
set2.add("oranges");
set2.add("mango");

console.log(set2);
//Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }

// for (const value of set2) {
//   console.log(value);
// }

// oranges
// apples
// mango

// the same with forEach:
// set2.forEach((value, valueAgain, set) => {
//   alert(value);
// });

set2.forEach((value) => {
  console.log(value);
});

// The same methods Map has for iterators are also supported:

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

for (const keys of set2.keys()) {
  console.log(keys);
}
// oranges
// apples
// mango

for (const keys of set2.values()) {
  console.log(keys);
}

// oranges
// apples
// mango

// set2.forEach((value, key) => {
//   console.log(`${key}: ${value}`); // cucumber: 500 etc
// });

// oranges: oranges
// apples: apples
// mango: mango

for (const [key, value] of set2.entries()) {
  console.log(`${key}: ${value}`);
}

// oranges: oranges
// apples: apples
// mango: mango

//* Summary

/*

* Map – is a collection of keyed values.

--> Methods and properties:

* new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.

* map.set(key, value) – stores the value by the key, returns the map itself.

* map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.

* map.has(key) – returns true if the key exists, false otherwise.

* map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.

* map.clear() – removes everything from the map.

* map.size – returns the current element count.

The differences from a regular Object:

Any keys, objects can be keys.
Additional convenient methods, the size property.


* Set – is a collection of unique values.

--> Methods and properties:

* new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.

* set.add(value) – adds a value (does nothing if value exists), returns the set itself.

* set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.

* set.has(value) – returns true if the value exists in the set, otherwise false.

*set.clear() – removes everything from the set.

* set.size – is the elements count.

Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.

*/

function unique(arr) {
  /* your code */

  return Array.from(new Set(arr));
}

let values = ["a", "a", "b", "c", "c", "c"];

alert(unique(values)); // a,b,c
