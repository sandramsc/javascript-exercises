"use strict";

// Lesson 09 exercise: The DOM and forms
// In your exercise repository, create a branch named `lesson-09-exercise` and switch to it.
// This lesson works with two provided files: open `lesson-09.html` with Live Server and keep
// the DevTools Console open, and write all JavaScript in `lesson-09.js`, which the page
// already loads with `defer`. The questions wait as comments in the JavaScript file.

// TODO: Part one.
// Log one sentence to the console, then log `document.title`, and confirm that both appear in
// the DevTools Console rather than in a terminal. In a comment, state what the `defer`
// attribute prevented.
console.log("This is a test sentence.");
console.log(document.title);

// * The `defer` attribute prevented the script from running before the HTML document was fully parsed, ensuring that the DOM elements are available when the script executes.

// TODO: Part two.
// Select the page's `h1` with `querySelector` and replace its `textContent` with a label name
// of your choosing. Select the tagline by its class and change its text, then add the provided
// highlight class to it through `classList`.

const h1 = document.querySelector("h1");
h1.textContent = "My Custom Label";

const tagline = document.querySelector(".tagline");
tagline.textContent = "This is my custom tagline.";
tagline.classList.add("highlight");

// TODO: Part three.
// The file provides the artists as an array of objects. Loop over it, create an `article`
// containing an `h3` for the name and a `p` for the genre and total runtime, fill both through
// dot notation and a template literal, and append each finished card into the element that
// carries the cards class. Reload the page and confirm that five cards stand on it.

// * The artists, provided:
const artists = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const cardsContainer = document.querySelector(".cards");
for (const artist of artists) {
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.textContent = artist.name;
  p.textContent = `${artist.genre} - Total Runtime: ${artist.total}`;

  article.appendChild(h3);
  article.appendChild(p);
  cardsContainer.appendChild(article);
}

// TODO: Part four.
// Add a sixth artist object of your own invention to the array and reload. Confirm that the
// sixth card exists, and state in a comment what you did not have to change, compared with the
// five hand-copied cards this course opened on.

const newArtist = { name: "New Artist", genre: "New Genre", total: "10:00" };
artists.push(newArtist);

// * I did not have to change the loop or the card creation code; it automatically handled the new artist object without any modifications.

// TODO: Part five.
// The page provides a button with the shuffle class and an element with the featured class. On
// click, pick a random artist using the random recipe with `Math.floor`, and write a featured
// sentence into the featured element with a template literal.

const shuffleButton = document.querySelector(".shuffle");
shuffleButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * artists.length);
  const randomArtist = artists[randomIndex];
  const featuredElement = document.querySelector(".featured");
  featuredElement.textContent = `Featured Artist: ${randomArtist.name} - ${randomArtist.genre} - Total Runtime: ${randomArtist.total}`;
});

// TODO: Part six.
// The page provides a form with the signup class and a text input with the artist-name id. On
// submit, call `preventDefault` on the event, read the input's `value`, and, when the value is
// truthy, push a new artist object built from it into the array and append one new card for
// it, reusing your card-building code from part three, ideally as a function that both parts
// call. An empty submission does nothing; name in a comment which falsy value makes that check
// work. As a stretch, clear the input by assigning it an empty string after each successful
// addition.

const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const artistNameInput = document.getElementById("artist-name");
  const artistName = artistNameInput.value.trim();

  if (artistName) {
    // This check works because an empty string is a falsy value.
    const newArtist = {
      name: artistName,
      genre: "Unknown Genre",
      total: "00:00",
    };
    artists.push(newArtist);
    addArtistCard(newArtist);
    artistNameInput.value = ""; // Clear the input after successful addition.
  }
});

function addArtistCard(artist) {
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  h3.textContent = artist.name;
  p.textContent = `${artist.genre} - Total Runtime: ${artist.total}`;

  article.appendChild(h3);
  article.appendChild(p);
  cardsContainer.appendChild(article);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main. This is the final exercise of the course, and the reviewed merge closes it.
// TODO: Submit the link to the pull request for review.
