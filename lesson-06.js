"use strict";
/*
// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
const menuItems = ["apples", "banana", "oranges", "pears", "strawberries"];

console.log(menuItems);
console.log(menuItems[0]);
console.log(menuItems[menuItems.length - 1]);
console.log(menuItems.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
//pop - last index
menuItems.pop("strawberries");
console.log(menuItems);

//unshift - first index
menuItems.unshift("mango");
console.log(menuItems);

//push - last index
menuItems.push("berries");
console.log(menuItems);

//shift - removes first item that was added and returns the item that was initially removed
menuItems.shift("mango");
console.log(menuItems);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (const menuItem of menuItems) {
  console.log(menuItem);
  console.log(menuItem);
}
// use if you want to take the index of the elements into consideration
for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
  console.log(menuItems[i]);
}
// use if you simply care about the elements and not their positions

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

const withTax = prices.map((price) => price * 1.07);
console.log(withTax);

const affordable = prices.filter((price) => price < 5);
console.log(affordable);

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

for (const artist of artists) {
  console.log(`Artist: ${artist}\n Music Artist`);
}

artists.push("Michael J");
console.log(artists);
// how the array is referenced does not change

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const menuItemsReference = menuItems;
menuItemsReference.push("tangerines");
console.log(menuItemsReference);

const menuItemsReferenceCopy = [...menuItems];
menuItemsReferenceCopy.push("Jogurt");
console.log(menuItemsReferenceCopy.length);
console.log(menuItemsReference.length);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];
for (let i = 0; i <= 101; i++) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let sum = 0;

for (const number of numbers) {
  sum = sum + number;
}

console.log(sum);
// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.
*/
// Reverse String
let word = "hello";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}

console.log(reversed);

// Vowels
let vowels = ["a", "i", "e", "o", "u"];
let count = 0;

for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i].toLowerCase())) {
    count++;
  }
}
console.log(count);

//Palindrome
let wordTwo = "level";

for (let i = wordTwo.length - 1; i >= 0; i--) {
  reversed += wordTwo[i];
}

if (wordTwo.toLowerCase() == reversed.toLowerCase()) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// For four words
let words = ["apples", "banana", "oranges", "pears"];
for (let word of words) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  if (word.toLowerCase() === reversed.toLowerCase()) {
    console.log(word + " is Palindrome");
  } else {
    console.log(word + " is not a Palindrome");
  }
}
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
