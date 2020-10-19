/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let myDrawBotton = document.querySelector("#buttonDraw");
const suits = ["\u2666", "\u2665", "\u2660", "\u2663"];
const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let myInputsArray = [];

myDrawBotton.addEventListener("click", myInputReciver);

console.log(myDrawBotton);

function myInputReciver() {
  let myTextInputValue = document.querySelector("#variable");
  let inputValue = myTextInputValue.value;
  console.log(inputValue);
  cardsGenerator(inputValue);
  return inputValue;
}

let randomIndex = array => {
  let radomNumber = Math.floor(Math.random() * array.length);
  return array[radomNumber];
};

function cardsGenerator(inputValue) {
  //   let myArray = [];
  //   let suitRandomIndex = randomIndex(number);
  let myCardsContainer = document.querySelector("#cardsContainer");

  if (!myCardsContainer.hasChildNodes()) {
    for (let numCards = 0; numCards < inputValue; numCards++) {
      console.log(200);

      let cardElement = document.createElement("div");

      cardElement.classList.add("card");

      let cardDivTop = document.createElement("div");

      let cardDivMid = document.createElement("div");

      let cardDivBottom = document.createElement("div");

      let midCardValue = document.createTextNode("2");

      cardDivMid.appendChild(midCardValue);

      cardElement.appendChild(cardDivTop);

      cardElement.appendChild(cardDivMid);

      cardElement.appendChild(cardDivBottom);

      myCardsContainer.appendChild(cardElement);
    }
  } else if (myCardsContainer.hasChildNodes()) {
    console.log(myCardsContainer);
    while (myCardsContainer.hasChildNodes())
      myCardsContainer.removeChild(myCardsContainer.firstChild);
  }
}
