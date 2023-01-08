//* F.prototype

/*

Remember, new objects can be created with a constructor function, like new F().

If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

Please note:
JavaScript had prototypal inheritance from the beginning. It was one of the core features of the language.

But in the old times, there was no direct access to it. The only thing that worked reliably was a "prototype" property of the constructor function, described in this chapter. So there are many scripts that still use it.

Please note that F.prototype here means a regular property named "prototype" on F. It sounds something similar to the term “prototype”, but here we really mean a regular property with this name.

*/

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit1 = new Rabbit("white rabbit"); //  rabbit.__proto__ == animal
let rabbit2 = new Rabbit("grey rabbit"); //  rabbit.__proto__ == animal
let rabbit3 = new Rabbit("black rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit1);
console.log(rabbit2);
console.log(rabbit3);

console.log(rabbit1.eats);
console.log(rabbit2.eats);
console.log(rabbit3.eats);

// Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal".

//* Default F.prototype, constructor property

// Every function has the "prototype" property even if we don’t supply it.

// The default "prototype" is an object with the only property constructor that points back to the function itself.

function Dog() {}

/* default prototype
Dog.prototype = { constructor: Dog }
*/

// by default
// Dog.prototype = { constructor: Dog }

console.log(Dog.prototype.constructor === Dog); // true

// Naturally, if we do nothing, the constructor property is available to all Dogs through [[Prototype]]

let dog1 = new Dog(); // inherits from {constructor: Dog}
let dog2 = new Dog(); // inherits from {constructor: Dog}
let dog3 = new Dog(); // inherits from {constructor: Dog}

console.log(dog1.constructor === Dog); // true (from prototype)

// We can use constructor property to create a new object using the same constructor as the existing one.

// Like here:

function Cat(name) {
  this.name = name;
  console.log(name);
}

let cat1 = new Cat("White Cat");
// let cat2 = new Cat("Red Cat");
let cat2 = new cat1.constructor("Red Cat");

console.log(cat1);
// White Cat
// Cat {name: 'White Cat'}
console.log(cat2);
// Red Cat
// Cat {name: 'Red Cat'}

/*

That’s handy when we have an object, don’t know which constructor was used for it (e.g. it comes from a 3rd party library), and we need to create another one of the same kind.

But probably the most important thing about "constructor" is that…

…JavaScript itself does not ensure the right "constructor" value.

Yes, it exists in the default "prototype" for functions, but that’s all. What happens with it later – is totally on us.

In particular, if we replace the default prototype as a whole, then there will be no "constructor" in it.

*/

//* In particular, if we replace the default prototype as a whole, then there will be no "constructor" in it.

function Rabbit1() {}
Rabbit1.prototype = {
  jumps: true,
};

let rabbit = new Rabbit1();
console.log(rabbit.constructor === Rabbit1); // false

//* So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:

function Rabbit2() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit2.prototype.jumps = true;
// the default Rabbit.prototype.constructor is preserved

// Or, alternatively, recreate the constructor property manually:

Rabbit2.prototype = {
  jumps: true,
  constructor: Rabbit,
};

// now constructor is also correct, because we added it

//* Summary

// In this chapter we briefly described the way of setting a [[Prototype]] for objects created via a constructor function. Later we’ll see more advanced programming patterns that rely on it.

// Everything is quite simple, just a few notes to make things clear:

// The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects when new F() is called.

// The value of F.prototype should be either an object or null: other values won’t work.

// The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.

// On regular objects the prototype is nothing special:
