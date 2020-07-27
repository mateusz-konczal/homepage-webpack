import moment from "moment";

// BIBLIOTEKA MOMENT (DATA I CZAS)
moment.locale("pl");
const emptyParagraph = document.querySelector(".about-me__time--js");

function updateDateAndTime() {
  emptyParagraph.innerHTML = moment().format("llll");
}

updateDateAndTime();
setInterval(function () {
  updateDateAndTime();
}, 30000);
