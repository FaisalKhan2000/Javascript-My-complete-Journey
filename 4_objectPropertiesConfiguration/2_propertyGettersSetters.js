//* Property getters and setters

/*

There are two kinds of object properties.

The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

The second type of property is something new. It’s an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

*/

//* Getters and setters

/* 

Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};

The getter works when obj.propName is read, the setter – when it is assigned.

*/

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

console.log(user.fullName);

user.fullName = "faisal khan";

console.log(user.fullName);
console.log(user.name);
console.log(user.surname);

//* Accessor descriptors

/*

Descriptors for accessor properties are different from those for data properties.

For accessor properties, there is no value or writable, but instead there are get and set functions.

That is, an accessor descriptor may have:

get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,
enumerable – same as for data properties,
configurable – same as for data properties.

*/

let user1 = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(user1, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(user1.fullName); // John Smith

for (const key in user1) {
  console.log(key);
}
// name
// surname

// Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.

// If we try to supply both get and value in the same descriptor, there will be an error:

// // Error: Invalid property descriptor.
// Object.defineProperty({}, 'prop', {
//   get() {
//     return 1
//   },

//   value: 2
// });

//* Smarter getters/setters

/*

Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:

*/

let user2 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return this._name;
    }
    this._name = value;
  },
};

user2.name = "Pete";
console.log(user2.name); // Pete

// user2.name = "Faisal";
// console.log(user2.name);

user2.name = " "; // Name is too short...
console.log(user2.name);

console.log(user2);
