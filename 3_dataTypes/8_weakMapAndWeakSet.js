//* WeakMap and WeakSet

// As we know from the chapter Garbage collection, JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.

let john1 = { name: "John" };
// the object can be accessed, john is the reference to it
// overwrite the reference
// the object will be removed from memory
john1 = null;

// Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.
// For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.

let john2 = { name: "John" };
let array = [john2];
john2 = null; // overwrite the reference
console.log(array[0]);

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

// Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

let john3 = { name: "John" };
let map = new Map();
map.set(john3, "...");

john = null; // overwrite the reference

console.log(map);

for (const key of map.keys()) {
  console.log(key.name); // John
}

for (const values of map.values()) {
  console.log(values); // ...
}
// WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.

//* WeakMap

/*

 WeakMap is a collection of key/value pairs in which the keys are objects and the values can be arbitrary values. 
The keys in a WeakMap are held weakly, which means that they can be garbage collected if there are no other references to the key. 
This makes WeakMaps useful for storing data in a Map-like structure where the keys are objects that you don't want to prevent from being garbage collected.

*/

// The first difference between Map and WeakMap is that keys must be objects, not primitive values:

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");
console.log(weakMap.get(obj)); // "ok"

// can't use a string as the key
// weakMap.set("test", "whoops"); // TypeError: Invalid value used as weak map key
// Error, because "test" is not an object

// Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.
let john4 = { name: "John" };

let weakMap2 = new WeakMap();
weakMap2.set(john4, "...");
console.log(weakMap2.get(john4)); // ...

john4 = null; // overwrite the reference

console.log(weakMap2.get(john4)); // undefined

// john is removed from memory!

/*

Compare it with the regular Map example above. Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

* WeakMap has only the following methods:

    weakMap.set(key, value);
    weakMap.get(key);
    weakMap.delete(key);
    weakMap.has(key);

*/

//* Usecase :

function fetchUserData(user) {
  // Imagine this function makes an HTTP request to fetch the user data
  return {
    id: user.id,
    name: user.name,
    email: `${user.name.toLowerCase()}@example.com`,
  };
}

const cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, fetchUserData(user));
  }
  return cache.get(user);
}

const user = { id: 1, name: "John" };
console.log(cacheUser(user)); // Output: { id: 1, name: 'John', email: 'john@example.com' }

/*
The cacheUser function takes a user object as an argument and does the following:

    It checks to see if the user object is already in the cache WeakMap by calling the has method on the WeakMap.

    If the user object is not in the cache, the function fetches the user data by calling the fetchUserData function and stores it in the cache WeakMap using the set method.

    Regardless of whether the user data was already in the cache or was just fetched, the function returns the user data by calling the get method on the WeakMap.
*/

//* WeakSet

/*

WeakSet behaves similarly:

    1. It is analogous to Set, but we may only add objects to WeakSet (not primitives).

    2. An object exists in the set while it is reachable from somewhere else.

    3. Like Set, it supports add, has and delete, but not size, keys() and no iterations.


Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

For instance, we can add users to WeakSet to keep track of those who visited our site:

*/

let visitedSet = new WeakSet();

let john5 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john5); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john5); // John again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(john5)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

// john = null;

// visitedSet will be cleaned automatically
// The most notable limitation of WeakMap and WeakSet is the absence of iterations, and the inability to get all current content. That may appear inconvenient, but does not prevent WeakMap/WeakSet from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.
