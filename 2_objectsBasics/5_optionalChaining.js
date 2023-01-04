//* Optional Chaining ?.

// The optional chaining operator (?.) is used to access a property of an object only if that object is not null or undefined. It allows you to write code that avoids the "cannot access property of undefined" or "cannot access property of null" errors that can occur when you try to access a property of an object that is null or undefined

let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

console.log(person?.address?.city); // Output: "New York"

person = null;
console.log(person?.address?.city); // Output: undefined

// The optional chaining operator can also be used to call a function that may or may not exist. For example:

let person1 = {
  name: "John",
  age: 30,
  greet: () => {
    console.log("Hello");
  },
};

person1?.greet(); // Output: "Hello"

person1 = null;
person1?.greet(); // Output: undefined
