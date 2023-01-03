/*
// https://javascript.info/object-copy

//* Object references and copying

// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// That’s easy to understand if we look a bit under the hood of what happens when we copy a value.

// Let’s start with a primitive, such as a string.

// Here we put a copy of message into phrase:

let message = "Hello!";
let phrase = message;

// Primitive datatypes like string when assigned to a different variable copy the whole values

message --> "Hello"
phrase --> "Hello"

// So, what happens case of Objects???

let user = {
  name: "john",
};

// The object containing the name : "john" is stored somewhere in the memory and the user has the reference to it

// user --> reference to Object

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let user = { name: "John" };

let admin = user; // copy the reference

// user --> {object} <-- admin
// both user and admin has the reference to the object

let user = { name: "John" };

let admin = user;

admin.name = "Pete"; // changed by the "admin" reference

console.log(user.name); // 'Pete', changes are seen from the "user" reference

//* Comparison by reference
// Two objects are equal only if they are the same object.

// For instance, here a and b reference the same object, thus they are equal:

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true
// And here two independent objects are not equal, even though they look alike (both are empty)

let a = {};
let b = {}; // two independent objects

console.log(a == b); // false
console.log(a === b); // false

//* Const objects can be modified
// An important side effect of storing objects as references is that an object declared as const can be modified.

// For instance:

const user = {
  name: "John",
};

user.name = "Pete"; // (*)

console.log(user.name); // Pete

// It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.
// 
// In other words, the const user gives an error only if we try to set user=... as a whole.
// 


//* Cloning and merging, Object.assign

// So, copying an object variable creates one more reference to the same object.

// But what if we need to duplicate an object?

// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

let user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
console.log(clone);
console.log(user);

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object

//* We can also use the method Object.assign.

// Object.assign(dest, ...sources)

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
// alert(user.name); // John
// alert(user.canView); // true
// alert(user.canEdit); // true

console.log(user);

// If the copied property name already exists, it gets overwritten:

// We also can use Object.assign to perform a simple object cloning:
let user = {
  name: "John",
  age: 30,
};
let clone = Object.assign({}, user);

// alert(clone.name); // John
// alert(clone.age); // 30

console.log(clone);

// Cloning using spread syntax
// {...user} --> we can also clone using spread

let clone2 = { ...user };
console.log(clone2);

//* Nested Cloning

// Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log( user.sizes.height ); // 182
// Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:

let clone = Object.assign({}, user);

console.log( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 60, get the result from the other one

// In the above Example the object.sizes object is referencing the user.sizes 
// Hence, to solve this issue we can use structured cloning

//* structuredClone;

// The call structuredClone(object) clones the object with all nested properties.

// Here’s how we can use it in our example:

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user);

console.log(user.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60; // change a property from one place
console.log(clone.sizes.width); // 50, not related

*/

// The structuredClone method can clone most data types, such as objects, arrays, primitive values.

// It also supports circular references, when an object property references the object itself (directly or via a chain or references).

// For instance:

let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
console.log(clone.me === clone); // true

console.log(user);
console.log(clone);
