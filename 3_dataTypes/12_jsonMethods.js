//* JSON methods, toJSON

/*

Let’s say we have a complex object, and we’d like to convert it into a string, to send it over a network, or just to output it for logging purposes.

Naturally, such a string should include all important properties.

We could implement the conversion like this:

*/

let user1 = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  },
};

// alert(user1); // {name: "John", age: 30}

// …But in the process of development, new properties are added, old properties are renamed and removed. Updating such toString every time can become a pain. We could try to loop over properties in it, but what if the object is complex and has nested objects in properties? We’d need to implement their conversion as well.

// Luckily, there’s no need to write the code to handle all this. The task has been solved already.

//* JSON.stringify

/*

The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is described as in RFC 4627 standard. Initially it was made for JavaScript, but many other languages have libraries to handle it as well. So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.

JavaScript provides methods:

JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
For instance, here we JSON.stringify a student:

*/

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

console.log(student);

let json = JSON.stringify(student);

console.log(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

/* 

The method JSON.stringify(student) takes the object and converts it into a string.

The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.

Please note that a JSON-encoded object has several important differences from the object literal:

Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.
JSON.stringify can be applied to primitives as well.

JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.

*/

console.log(JSON.stringify(1));
console.log(JSON.stringify("test"));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3]));

/*

JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:

    * Function properties (methods).
    * Symbolic keys and values.
    * Properties that store undefined.

*/

let user2 = {
  sayHi() {
    alert("Hello");
  },
  [Symbol("id")]: 123,
  something: undefined,
};

// alert(JSON.stringify(user2)); //{}

/*
Usually that’s fine. If that’s not what we want, then soon we’ll see how to customize the process.

The great thing is that nested objects are supported and converted automatically.
*/

let meetup1 = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

// alert(JSON.stringify(meetup1));
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

// The important limitation: there must be no circular references.

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup
// console.log(meetup);

// JSON.stringify(meetup); // Error: Converting circular structure to JSON

//* Excluding and transforming: replacer

/*

The full syntax of JSON.stringify is:

* let json = JSON.stringify(value[, replacer, space])

    * value
    A value to encode.

    * replacer
    Array of properties to encode or a mapping function function(key, value).

    * space
    Amount of space to use for formatting

Most of the time, JSON.stringify is used with the first argument only. But if we need to fine-tune the replacement process, like to filter out circular references, we can use the second argument of JSON.stringify.

If we pass an array of properties to it, only these properties will be encoded.

*/

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup
// console.log(meetup);

// console.log(JSON.stringify(meetup, ["title", "participants"])); // {"title":"Conference","participants":["john","ann"]}
// // alert(JSON.stringify(meetup, ["title", "participants"]));

// Here we are probably too strict. The property list is applied to the whole object structure. So the objects in participants are empty, because name is not in the list.

// Let’s include in the list every property except room.occupiedBy that would cause the circular reference:

// alert(
//   JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
// );
// console.log(
//   JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
// );

// {"title":"Conference","participants":["john","ann"],"place":{"number":23}}

/* 

Now everything except occupiedBy is serialized. But the list of properties is quite long.

Fortunately, we can use a function instead of an array as the replacer.

The function will be called for every (key, value) pair and should return the “replaced” value, which will be used instead of the original one. Or undefined if the value is to be skipped.

In our case, we can return value “as is” for everything except occupiedBy. To ignore occupiedBy, the code below returns undefined:

*/

// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return key == "occupiedBy" ? undefined : value;
//   })
// );

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(meetup);

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

// Please note that replacer function gets every key/value pair including nested objects and array items. It is applied recursively. The value of this inside replacer is the object that contains the current property.

// The first call is special. It is made using a special “wrapper object”: {"": meetup}. In other words, the first (key, value) pair has an empty key, and the value is the target object as a whole. That’s why the first line is ":[object Object]" in the example above.

// The idea is to provide as much power for replacer as possible: it has a chance to analyze and replace/skip even the whole object if necessary.

//* Formatting: space

/*

The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty formatting.

Previously, all stringified objects had no indents and extra spaces. That’s fine if we want to send an object over a network. The space argument is used exclusively for a nice output.

Here space = 2 tells JavaScript to show nested objects on multiple lines, with indentation of 2 spaces inside an object:

*/

let user3 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

// alert(JSON.stringify(user3, null, 2));

console.log(JSON.stringify(user3));
// {"name":"John","age":25,"roles":{"isAdmin":false,"isEditor":true}}
console.log(JSON.stringify(user3, null, 1));
// {
//   "name": "John",
//   "age": 25,
//   "roles": {
//     "isAdmin": false,
//     "isEditor": true
//   }
// }
console.log(JSON.stringify(user3, null, 2));
// {
//   "name": "John",
//   "age": 25,
//   "roles": {
//     "isAdmin": false,
//     "isEditor": true
//   }
// }
console.log(JSON.stringify(user3, null, 4));
// {
//     "name": "John",
//     "age": 25,
//     "roles": {
//         "isAdmin": false,
//         "isEditor": true
//     }
// }

//* Custom “toJSON”

// Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.

let room2 = {
  number: 23,
};

let meetup2 = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room2,
};

console.log(JSON.stringify(meetup2));

/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/

// Here we can see that date (1) became a string. That’s because all dates have a built-in toJSON method which returns such kind of string.

// Now let’s add a custom toJSON for our object room (2):

let room3 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup3 = {
  title: "Conference",
  room3,
};

// console.log(object);
console.log(JSON.stringify(room3)); // 23

console.log(JSON.stringify(meetup3));
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

// As we can see, toJSON is used both for the direct call JSON.stringify(room) and when room is nested in another encoded object.

//* JSON.parse

/*

To decode a JSON-string, we need another method named JSON.parse.

The syntax:

let value = JSON.parse(str, [reviver]);
str
JSON-string to parse.
reviver
Optional function(key,value) that will be called for each (key, value) pair and can transform the value.

*/

// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log(numbers);
console.log(numbers[1]); // 1

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);
console.log(user);
console.log(user.friends[1]); // 1

//* Using reviver

// Imagine, we got a stringified meetup object from the server.

// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// …And now we need to deserialize it, to turn back into JavaScript object.

// Let’s do it by calling JSON.parse:
let meetup4 = JSON.parse(str);
console.log(meetup4);
// console.log(meetup.date.getDate()); // Error!

// Whoops! An error!

// The value of meetup.date is a string, not a Date object. How could JSON.parse know that it should transform that string into a Date?

// Let’s pass to JSON.parse the reviving function as the second argument, that returns all values “as is”, but date will become a Date:

let meetup5 = JSON.parse(str, function (key, value) {
  if (key == "date") {
    return new Date(value);
  }
  return value;
});

console.log(meetup5.date.getDate());

// By the way, that works for nested objects as well:

/*

* Summary

    * JSON is a data format that has its own independent standard and libraries for most programming languages.

    * JSON supports plain objects, arrays, strings, numbers, booleans, and null.

    * JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.

    * Both methods support transformer functions for smart reading/writing.

    * If an object has toJSON, then it is called by JSON.stringify.

*/
