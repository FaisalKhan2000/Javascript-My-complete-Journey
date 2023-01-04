//* Comparisons

/*

there are several comparison operators that can be used to compare values:

==: equal to
!=: not equal to
===: equal value and equal type
!==: not equal value or not equal type
>: greater than
<: less than
>=: greater than or equal to
<=: less than or equal to

*/

5 == 5; // true
5 == "5"; // true
5 === "5"; // false
5 !== "5"; // true
5 > 4; // true
5 < 4; // false
5 >= 5; // true
5 <= 4; // false

// It's important to note the difference between == and ===. The == operator performs type coercion, which means it converts the operands to the same type before making the comparison. The === operator, on the other hand, does not perform type coercion, so it compares the values and their types. In general, it's a good practice to use === instead of == to avoid unexpected results.

// The == operator compares two values and returns true if they are equal, and false otherwise. It performs type coercion, which means it converts the operands to the same type before making the comparison.

5 == 5; // true
5 == "5"; // true
true == 1; // true
false == 0; // true
null == undefined; // true

// The === operator, on the other hand, does not perform type coercion. It compares the values and their types, and returns true if both are equal, and false otherwise.
5 === 5; // true
5 === "5"; // false
true === 1; // false
false === 0; // false
null === undefined; // false
