//* Symbol type

/*
By specification, only two primitive types may serve as object property keys:

string type, or
symbol type.
Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

Until now we’ve been using only strings.

Now let’s explore symbols, see what they can do for us.
*/

//* Symbols

// A “symbol” represents a unique identifier.
// A value of this type can be created using Symbol():

// let id = Symbol();

//! Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:

// id is a symbol with the description "id"
// let id = Symbol("id");

// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything.

// For instance, here are two symbols with the same description – they are not equal:

let idx = Symbol("id");
let idy = Symbol("id");

console.log(idx == idy); // false

// If you are familiar with Ruby or another language that also has some sort of “symbols” – please don’t be misguided. JavaScript symbols are different.

// So, to summarize, a symbol is a “primitive unique value” with an optional description. Let’s see where we can use them.

// let id = Symbol("Hello");
// console.log(id); // Symbol(Hello)
// console.log(id.description); // Hello

let user = {
  name: "John",
};

let id = Symbol();
let phone = Symbol();
let email = Symbol();

user[id] = 1;
user[phone] = "+91 8291409862";
user[email] = "iamfaisal.luv@gmail.com";

console.log(user[id]);
console.log(user[phone]);
console.log(user[email]);
console.log(user);

for (let key in user) {
  console.log(key); // 'name'
}

/*

There are a few benefits to using symbols over strings as keys in objects:

    Symbols are unique: No matter how many times you create a symbol with the same description, you will always get a new, unique symbol. This is not the case with strings, where multiple copies of the same string will be treated as the same value.

    Symbols are not enumerable: By default, symbols are not enumerable, which means they will not show up when you loop through the object's keys or when you use methods like Object.keys() or JSON.stringify(). This can be useful if you want to create "hidden" properties that cannot be accessed or modified by external code.

    Symbols are not coerced: Symbols are a primitive data type, and they are not coerced to strings when used as object keys. This means you can use symbols as keys even if the object already has a key with the same name, but the symbol will not overwrite the existing key.

Here's an example to illustrate these points:

*/

const id1 = Symbol("id");
const id2 = Symbol("id");
const id3 = "id";

console.log(id1 === id2); // false
console.log(id1 === id3); // false

const obj = {
  [id1]: 123,
  [id3]: 456,
  [id2]: 789,
};

console.log(obj[id1]); // 123
console.log(obj[id2]); // 789
console.log(obj[id3]); // 456

for (const key in obj) {
  console.log(key); // 'id' (only the string key is enumerable)
}

console.log(Object.keys(obj)); // ['id'] (only the string key is returned)
console.log(JSON.stringify(obj)); // '{"id":456}' (only the string key is included in the string)

//* Symbols are not coerced:

// const id4 = Symbol('id');
// const id4 = 'id';

// const obj = {
//   [id1]: 123,
//   [id2]: 456
// };

// console.log(obj[id1]); // 123
// console.log(obj[id2]); // 456

// In this example, we create a symbol with the description 'id' and a string with the same value. We use these keys to set values in an object. When we log the values using the keys, we see that they are both correctly set. This is because the symbol does not overwrite the string key, because symbols are not coerced to strings when used as object keys.

//* Global Symbols

/*
Global symbols are symbols that are registered in a global symbol registry, which is a shared list of symbols that are available to all objects in the global scope.

To create a global symbol, you can use the Symbol.for() method, which takes a string as an argument and returns a symbol. If a symbol with the same description has already been registered in the global symbol registry, the Symbol.for() method will return the existing symbol. If no such symbol exists, the method will create a new symbol and register it in the global symbol registry.

*/

// Here's an example of how you might use the Symbol.for() method:

const id5 = Symbol.for("id");
const id6 = Symbol.for("id");

console.log(id5 === id6); // true

/*
In this example, we create two symbols using the Symbol.for() method and the same description, 'id'. When we compare them using the strict equality operator (===), we see that they are equal. This is because the Symbol.for() method returns the same symbol from the global symbol registry each time it is called with the same description.

You can also use the Symbol.keyFor() method to retrieve the description of a global symbol from the global symbol registry. Here's an example:

*/

const id7 = Symbol.for("id");

console.log(Symbol.keyFor(id7)); // 'id'

/*
In this example, we use the Symbol.keyFor() method to retrieve the description of the global symbol 'id' from the global symbol registry. The method returns the string 'id', which is the description of the symbol.

Global symbols can be useful if you need to create a shared, unique identifier that can be used across different parts of your code. They are also useful if you need to create a symbol that can be looked up by its description, rather than having to store a reference to the symbol itself. However, they should be used with caution, because they add a global variable to the environment and can potentially create naming conflicts.

*/
