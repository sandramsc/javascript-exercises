"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "Maison Sarah"; // const because the name of the shop will not change
const shopLocation = "Downtown"; // const because the location of the shop will not change
let openingHour = 7; // let because the opening hour may change in the future
let closingHour = 19; // let because the closing hour may change in the future
const isOpenOnWeekends = true; // const because this is a boolean that will not change

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof shopName); // string
console.log(typeof shopLocation); // string
console.log(typeof openingHour); // number
console.log(typeof closingHour); // number
console.log(typeof isOpenOnWeekends); // boolean
console.log(typeof null); // object (this is the famous historical bug)
console.log(typeof undefined); // undefined

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let uninitializedVariable; // variable declared but not assigned a value
let nullVariable = null; // variable explicitly assigned a null value

console.log(uninitializedVariable); // undefined
console.log(nullVariable); // null
console.log(typeof uninitializedVariable); // undefined
console.log(typeof nullVariable); // object

// The difference is that `undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value that represents no value or no object.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

console.log(Number(priceText)); // 4.5
console.log(typeof Number(priceText)); // number
console.log(Number(countText)); // 12
console.log(typeof Number(countText)); // number
console.log(Boolean(flagText)); // true
console.log(typeof Boolean(flagText)); // boolean
console.log(String(42)); // "42"
console.log(typeof String(42)); // string

// If the string being converted to a number were not a string, the conversion would produce `NaN` (Not-a-Number).

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah"; // changed from const to let because we want to reassign it later
bakeryName = "The Corner Bakery"; // reassigned the value of bakeryName
let openingHour = 7; // declared openingHour with let to avoid assignment to an undeclared variable
let loafCount = 12; // swapped the location of the declaration and the assignment to avoid reading the variable before its declaration
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 5;
let b = 10;
let c = a; // temporary variable to hold the value of a
a = b; // assign the value of b to a
b = c; // assign the value of c (original a) to b

console.log(a); // 10
console.log(b); // 5

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
