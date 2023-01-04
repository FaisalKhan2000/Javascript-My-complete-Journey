// Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.

// Object.create(): Creates an object that has the specified prototype or that has null prototype.

// Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

// Object.freeze(): Freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. The method returns the object being frozen.

// Object.getOwnPropertyDescriptor(): Returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.

// Object.getOwnPropertyNames(): Returns an array of all own properties' names of an object.

// Object.getPrototypeOf(): Returns the prototype (i.e., the value of the internal [[Prototype]] property) of the specified object.

// Object.is(): Compares if two values are the same value.

// Object.isExtensible(): Determines if an object is extensible (whether it can have new properties added to it).

// Object.isFrozen(): Determines if an object is frozen.

// Object.isSealed(): Determines if an object is sealed.

// Object.keys(): Returns an array of a given object's own enumerable property names.

// Object.preventExtensions(): Prevents the addition of new properties to an object.

// Object.seal(): Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

//* Object.assign(): --> merge multiple Objects

const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const object3 = { e: 5, f: 6 };

const mergedObject = Object.assign(object1, object2, object3);

console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

//* Object.create() --> The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

const prototypeObject = { greeting: "Hello" };
const object = Object.create(prototypeObject);

console.log(object.greeting); // Output: 'Hello'

//* Object.entries() --> returns an array which is combination of [key, value] pair in the sequential order

const object4 = { a: 1, b: 2, c: 3 };
const entries = Object.entries(object4);

console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]

//* Object.freeze() -->  Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

const object5 = { a: 1, b: 2 };
Object.freeze(object5);

try {
  object5.c = 3;
} catch (error) {
  console.log(error); // Output: TypeError: Cannot add property c, object is not extensible
}

console.log(object5); // Output: { a: 1, b: 2 }

//* Object.getOwnPropertyDescriptor() --> The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.

// You might use this method if you want to get the details of a property of an object, such as its value, writability, enumerability, or configurability. For example:

const object6 = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(object6, "a");

console.log(descriptor); // Output: { value: 1, writable: true, enumerable: true, configurable: true }
descriptor.configurable = false;
console.log(descriptor);
