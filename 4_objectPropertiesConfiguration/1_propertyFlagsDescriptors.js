//* Property flags and descriptors

// As we know, objects can store properties.

// Until now, a property was a simple “key-value” pair to us. But an object property is actually a more flexible and powerful thing.

//* Property flags

/*

Object properties, besides a value, have three special attributes (so-called “flags”):

  * writable – if true, the value can be changed, otherwise it’s read-only.

  * enumerable – if true, then listed in loops, otherwise not listed.

  * configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

We didn’t see them yet, because generally they do not show up. When we create a property “the usual way”, all of them are true. But we also can change them anytime.

First, let’s see how to get those flags.

* The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

The syntax is:

* let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);


* obj -> The object to get information from.


* propertyName -> The name of the property.


The returned value is a so-called “property descriptor” object: it contains the value and all the flags.

*/

//* Object.getOwnPropertyDescriptor(obj, propertyName);

let user1 = {
  name: "John",
};

let descriptor1 = Object.getOwnPropertyDescriptor(user1, "name");

console.log(descriptor1);
// {value: 'John', writable: true, enumerable: true, configurable: true}

// console.log(JSON.stringify(descriptor, null, 2));

//*  Object.defineProperty(obj, propertyName, descriptor)

/*

* obj, propertyName
The object and its property to apply the descriptor.

* descriptor
Property descriptor object to apply.


If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.

*/

let user2 = {};

Object.defineProperty(user2, "name", {
  value: "John",
});

let descriptor2 = Object.getOwnPropertyDescriptor(user2, "name");

console.log(descriptor2);

// {value: 'John', writable: false, enumerable: false, configurable: false}

// Compare it with “normally created” user.name above: now all flags are falsy. If that’s not what we want then we’d better set them to true in descriptor.

// Now let’s see effects of the flags by example.

//* Non-writable

// Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:

let user3 = {
  name: "John",
};
Object.defineProperty(user3, "name", {
  writable: false,
});
user3.name = "Pete"; // Error: Cannot assign to read only property 'name'
console.log(user3);

// Here’s the same example, but the property is created from scratch:

let user4 = {};

Object.defineProperty(user4, "name", {
  value: "John",

  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true,
});

console.log(user4.name); // John
user4.name = "Pete"; // Error
console.log(user4.name); // John

// What will happen if we define writable: true

let user5 = {};

Object.defineProperty(user5, "name", {
  value: "John",

  writable: true,
});

console.log(user5.name); // John
user5.name = "Pete";
console.log(user5.name); // Pete

//* Non-enumerable

// Now let’s add a custom toString to user.

// Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in, like this:

let user6 = {
  name: "John",
  toString() {
    return this.name;
  },
};

for (const key in user6) {
  console.log(key);
}
// name, toString

// If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in loop, just like the built-in one:

let user7 = {
  name: "John",
  toString() {
    return this.name;
  },
};

Object.defineProperty(user7, "toString", {
  enumerable: false,
});

for (const key in user7) {
  console.log(key); // name
}

// Non-enumerable properties are also excluded from Object.keys:

console.log(Object.keys(user7)); // ['name']

//* Non-configurable

/*

The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

A non-configurable property can’t be deleted, its attributes can’t be modified.

For instance, Math.PI is non-writable, non-enumerable and non-configurable:

*/

let descriptor3 = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor3);
// {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

// So, a programmer is unable to change the value of Math.PI or overwrite it.

// Math.PI = 3; // Error, because it has writable: false

// delete Math.PI won't work either

// We also can’t change Math.PI to be writable again:

// Error, because of configurable: false
// Object.defineProperty(Math, "PI", { writable: true });
// There’s absolutely nothing we can do with Math.PI.

// Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

// Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.

// Here user.name is non-configurable, but we can still change it (as it’s writable):

let user8 = {
  name: "John",
};

Object.defineProperty(user8, "name", {
  configurable: false,
});

console.log(user8);
user8.name = "Pete"; // works fine
console.log(user8);
delete user8.name; // Error
console.log(user8);

// And here we make user.name a “forever sealed” constant, just like the built-in Math.PI:

let user9 = {
  name: "John",
};

Object.defineProperty(user9, "name", {
  writable: false,
  configurable: false,
});

// won't be able to change user.name or its flags
// all this won't work:

console.log(user9);
user9.name = "Pete";
delete user9.name;
console.log(user9);
// Object.defineProperty(user9, "name", { value: "Pete" });

//* Object.defineProperties;

/* 

There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.

The syntax is:

Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});

*/

let user10 = {};

Object.defineProperties(user10, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  email: { value: "johnsmith@gmail.com", writable: false },
});

console.log(user10); // {name: 'John', surname: 'Smith', email: 'johnsmith@gmail.com'}

//* Object.getOwnPropertyDescriptors

console.log(Object.getOwnPropertyDescriptors(user10));

//* Sealing an object globally

/*

Property descriptors work at the level of individual properties.

There are also methods that limit access to the whole object:

* Object.preventExtensions(obj)
Forbids the addition of new properties to the object.

* Object.seal(obj)
Forbids adding/removing of properties. Sets configurable: false for all existing properties.

* Object.freeze(obj)
Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

*...And also there are tests for them:...

* Object.isExtensible(obj)
Returns false if adding properties is forbidden, otherwise true.

* Object.isSealed(obj)
Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.

* Object.isFrozen(obj)
Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.

These methods are rarely used in practice.

*/
