"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.
class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total runtime of ${this.total}.`;
  }

  static named(artists, name) {
    return artists.find((artist) => artist.name === name);
  }
}

const artist1 = new Artist("Pinkfong", "Children's music", "11:31");
const artist2 = new Artist("Adriano Celentano", "Italian pop", "20:52");

console.log(artist1.describe());
console.log(artist2.describe());

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const artists = [];
for (const data of artistData) {
  artists.push(new Artist(data.name, data.genre, data.total));
}
for (const artist of artists) {
  console.log(artist.describe());
}

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
//const broken = new Artist("Pinkfong", "Children's music", "11:31");

// * Prediction: This will throw a TypeError because classes must be called with `new`.

// ! Snippet two, an arrow function used as a method that reads this:
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`,
};
console.log(single.describe());

// * Prediction: This will log "undefined by undefined" because arrow functions do not have their own `this` context, so `this` refers to the global object, which does not have `title` or `artist` properties.

// * Snippet three, the correct call. Uncomment after part one:
console.log(new Artist("Asake", "Afrobeats", "14:08").describe());
// * Prediction: This will log "Asake is a Afrobeats artist with a total runtime of 14:08." because it correctly creates a new instance of the Artist class and calls the describe method on it.

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.

class FeaturedArtist extends Artist {
  constructor(name, genre, total, blurb) {
    super(name, genre, total);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()} ${this.blurb}`;
  }
}

const featuredArtist = new FeaturedArtist(
  "Miyagi and Andy Panda",
  "Hip-hop",
  "16:21",
  "They are known for their unique style and collaborations.",
);
console.log(featuredArtist.describe());

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:
function ArtistOld(name, genre) {
  // * Equivalent in class syntax: constructor(name, genre) { ... }
  this.name = name;
  // * Equivalent in class syntax: this.name = name; this.genre = genre;
  this.genre = genre;
  // * Equivalent in class syntax: this.genre = genre;
}
ArtistOld.prototype.describe = function () {
  // * Equivalent in class syntax: describe() { ... }
  return `${this.name}, ${this.genre}`;
  // * Equivalent in class syntax: return `${this.name}, ${this.genre}`; }
};
ArtistOld.prototype.tag = function () {
  // * Equivalent in class syntax: tag() { ... }
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
  // * Equivalent in class syntax: return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`; }
};

// * Equivalent in class syntax:
class ArtistOldClass {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }
  describe() {
    return `${this.name}, ${this.genre}`;
  }
  tag() {
    return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
  }
}

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

const foundArtist = Artist.named(artists, "Asake");
if (foundArtist) console.log(foundArtist.describe());

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
