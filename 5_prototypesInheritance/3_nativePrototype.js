// ! Difficult concept will visit again
// https://javascript.info/native-prototypes

//* Native prototypes

/*

The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it.

First we’ll look at the details, and then how to use it for adding new capabilities to built-in objects.

*/

//* Object.prototype

// Let’s say we output an empty object:

// let obj = {};
// console.log(obj); // {}
// alert(obj); // [object Object]

/* 

Where’s the code that generates the string "[object Object]"? That’s a built-in toString method, but where is it? The obj is empty!

…But the short notation obj = {} is the same as obj = new Object(), where Object is a built-in object constructor function, with its own prototype referencing a huge object with toString and other methods.

Here’s what’s going on:


            
 Object           prototype     Object.prototype
[           ]     --------->   [costructor: Object, toString: function,....]



When new Object() is called (or a literal object {...} is created), the [[Prototype]] of it is set to Object.prototype according to the rule that we discussed in the previous chapter:

* Object is a built-in object constructor function

* with its own prototype referencing a huge object with toString and other methods.
obj = new Object();
Object.prototype.toString = ....


*   Object         prototype       Object.prototype
[           ]     --------->   [costructor: Object, toString: function,....]
                                      ^
                                      | [[Prototype]]
                                      |
                                obj = new Object()

So then when obj.toString() is called the method is taken from Object.prototype

*/

// obj = new Object();
let obj = {};
console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === Object.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);

// Please note that there is no more [[Prototype]] in the chain above Object.prototype:

console.log(Object.prototype.__proto__); // null
