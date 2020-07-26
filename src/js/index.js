import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const firstName = "Mateusz";
const age = 24;

// alert("Witaj, przybyszu! 👋");
console.log(`Siema ✋, nazywam się ${firstName} i mam ${age} lata. 🚀`);

// const emptyParagraph = document.querySelector(".main__description--js");
// emptyParagraph.innerHTML = `<b>Hello!</b>`;

// ZWYKŁA FUNKCJA
function greetOld(name, age) {
  console.log(
    `Witaj Drogi Odwiedzający 😁. Mam na imię ${name} i mam ${age} lata.`
  );
}

// ARROW FUNCTION
const greet = (name, age) => {
  console.log(
    `Witaj Drogi Odwiedzający 😁. Mam na imię ${name} i mam ${age} lata.`
  );
};

greetOld("Mateusz", 24);
greet("Paweł", 24);

// OBIEKT
const person = {
  name: "Krzysztof",
  age: 24,
  greet: (name, age) => {
    console.log(
      `Witaj Drogi Odwiedzający 😁. Mam na imię ${name} i mam ${age} lata.`
    );
  },
  address: {
    place: "Stary Jarużyn",
    houseNumber: 41,
    city: "Szubin",
    postalCode: "89-200",
  },
};

console.log(person);
console.log(typeof person);
console.log(`Imię: ${person.name}`);
console.log(typeof person.name);
console.log(`Wiek: ${person.age}`);
console.log(typeof person.age);

const myProperty = "name";
console.log(person[myProperty]);
console.log(person["age"]);

const showMeProperty = (property) => {
  console.log(`Twoja własność ${property} to: ${person[property]}`);
};

showMeProperty(myProperty);

person.greet("Andrzej", 52);

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
