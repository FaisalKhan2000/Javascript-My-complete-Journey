//* for loop

/*
A for loop is a control flow statement that allows you to repeat a block of code a certain number of times. It is commonly used to perform a task multiple times, or to iterate over an array to access each element in the array.

The syntax of a for loop in JavaScript is:
for (initialization; condition; increment) {
  // code block to be executed
}
*/

// Here's an example of a for loop in JavaScript:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Here's another example of a for loop that counts down from 10 to 1:

for (let i = 10; i > 0; i--) {
  console.log(i);
}

//* while loop

/* 

while loop is used to execute a block of code repeatedly as long as a certain condition is true. Here is the syntax for a while loop:

The condition is checked at the beginning of each iteration. If it is true, the block of code inside the loop is executed. If the condition is false, the loop is terminated.


The while loop has the following syntax:

while (condition) {
  // code
  // so-called "loop body"
}
*/

// Here is an example of a while loop that counts from 1 to 10:

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//* do...while loop

/* 
A do...while loop in JavaScript is similar to a while loop, but it is guaranteed to execute the body of the loop at least once. The syntax for a do...while loop is as follows:


do {
  // code to be executed
} while (condition);

The body of the loop is executed first, and then the condition is checked. If the condition is true, the loop is executed again. If the condition is false, the loop is terminated.

Here is an example of a do...while loop that counts from 1 to 10:


*/

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
