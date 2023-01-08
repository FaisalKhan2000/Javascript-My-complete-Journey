//* Prototypal inheritance

/*

In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

Prototypal inheritance is a language feature that helps in that.

* [[Prototype]]

In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:


When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.

The property [[Prototype]] is internal and hidden, but there are many ways to set it.

One of them is to use the special name __proto__, like this:

*/

let animal1 = {
  eats: true,
};
let rabbit1 = {
  jumps: true,
};

console.log(rabbit1.jumps); // true
console.log(rabbit1.eats); // undefined
rabbit1.__proto__ = animal1; // sets rabbit.[[Prototype]] = animal

// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.

console.log(rabbit1.jumps); // true
console.log(rabbit1.eats); // true

/* 

Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".

So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.

If we have a method in animal, it can be called on rabbit:

*/

let animal2 = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit2 = {
  jumps: true,
  __proto__: animal2,
};

// walk is taken from the prototype
rabbit2.walk(); // Animal walk

// The prototype chain can be longer
let animal3 = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit3 = {
  jumps: true,
  __proto__: animal3,
};

let longEar3 = {
  earLength: 10,
  __proto__: rabbit3,
};

// walk is taken from the prototype chain
longEar3.walk(); // Animal walk
console.log(longEar3.jumps); // true (from rabbit)
console.log(longEar3.eats); // true (from animal)
console.log(longEar3.earLength); // 10

// Now if we read something from longEar, and it’s missing, JavaScript will look for it in rabbit, and then in animal.

// There are only two limitations:

// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.
// Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.

//* Writing doesn’t use prototype

// The prototype is only used for reading properties.
// Write/delete operations work directly with the object.
// In the example below, we assign its own walk method to rabbit:

let animal4 = {
  eats: true,
  walk() {
    console.log("Animal Walks");
  },
};

let rabbit4 = {
  jumps: true,
  __proto__: animal4,
};

rabbit4.walk(); // Animal walks --> takes walk function from the animal since walk is not available in rabbit

rabbit4.walk = function () {
  console.log("Rabbit walks");
};

rabbit4.walk(); // Animal walks --> takes walk function available in rabbit

// From now on, rabbit.walk() call finds the method immediately in the object and executes it, without using the prototype:

// Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the same as calling a function.

// For that reason admin.fullName works correctly in the code below:

let user = {
  firstName: "John",
  lastName: "Smith",

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName); // John Smith (*)

// Setter triggers
admin.fullName = "Faisal Khan"; // (**)

console.log(admin.fullName); // Faisal Khan, state of admin modified
console.log(user.fullName); // John Smith, state of user protected

// Here in the line (*) the property admin.fullName has a getter in the prototype user, so it is called. And in the line (**) the property has a setter in the prototype, so it is called.

// animal has methods
let animal5 = {
  eats: true,
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit5 = {
  name: "White Rabbit",
  __proto__: animal5,
};

// modifies rabbit.isSleeping
rabbit5.sleep();

console.log(rabbit5.isSleeping); // true
console.log(animal5.isSleeping); // undefined (no such property in the prototype)

animal5.walk();
animal5.sleep();

console.log(animal5.isSleeping); // undefined (no such property in the prototype)

//* for…in loop

// The for..in loop iterates over inherited properties too.

//* Object.keys only returns own keys
console.log(Object.keys(rabbit4));
// (2) ['jumps', 'walk'] ---> doesn't show the eats key

// for..in loops over both own and inherited keys
for (const key in rabbit4) {
  console.log(key);
}
// jumps
// walk
// eats

console.log(rabbit5);
console.log(animal5);

// If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.

// So we can filter out inherited properties (or do something else with them):

for (let prop in rabbit5) {
  let isOwn = rabbit5.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}

//* Summary

/*

In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.

We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).

The object referenced by [[Prototype]] is called a “prototype”.

If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.

Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).

If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.

The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

*/
