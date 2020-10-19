/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let myDrawBotton = document.querySelector("#buttonDraw");

myDrawBotton.addEventListener("click", myInputReciver);

console.log(myDrawBotton);

function myInputReciver() {
  let myTextInputValue = document.querySelector("#variable");
  let inputValue = myTextInputValue.value;
  console.log(inputValue);
  cardsGenerator(inputValue);
  return inputValue;
}

function cardsGenerator(inputValue) {
  let myArray = [];
  let myCardsContainer = document.querySelector("#cardsContainer");
  if (myCardsContainer.parentNode == 0) {
    for (let numCards = 0; numCards < inputValue; numCards++) {
      let CardElement = document.createElement("div");

      let myCard = document.createTextNode("hola");

      CardElement.appendChild(myCard);

      myCardsContainer.appendChild(CardElement);

      myArray.push(numCards);
      console.log(myArray);
    }
  } else {
    myCardsContainer.removeChild(myCardsContainer.children);
  }
}

// myDrawBotton.addEventListener("click", cardsCreator());

// function cardsCreator() {
//   let myCardsContainer = document.querySelector("#cardsContainer");
//   var CardElement = document.getElementById("myFirstDiv");
//   var newCard = document.createElement("h1");
//   var t = document.createTextNode("");
//   newCard.appendChild(t); //This adds the text content to the h1
//   CardElement.appendChild(newCard); //This adds the h1 into the original element
// }
