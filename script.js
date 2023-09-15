/**
 *  Tarot Card Class and instantiations
 */

// EXERCISE 1: Take a look at this class, and at the tarot cards instantiated on lines 18-22
class TarotCard {
  name = "";
  imgSrc = "";

  // The constructor function on a class is called when you use the new keyword to instantiate a new class object, see examples a bit below!
  constructor(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
  }
}

const ALL_CARDS = [
  new TarotCard("The Fool", "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg"),
  new TarotCard("The Magician", "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"),
  new TarotCard("The High Priestess", "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg"),
  new TarotCard("The Empress", "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg"),
  new TarotCard("The Emperor", "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg"),
]

let currentCard = ALL_CARDS[0]

/**
 * App functionality
 */

addEventListener("DOMContentLoaded", (event) => {
    updateCardImage(currentCard.imgSrc)

    document.getElementById("button1").onclick = function(event) {
      validateAnswer(event);
    };

    document.getElementById("button2").onclick = function(event) {
      validateAnswer(event);
    };

    document.getElementById("button3").onclick = function(event) {
      validateAnswer(event);
    };

    document.getElementById("button4").onclick = function(event) {
      validateAnswer(event);
    }
});


function updateCardImage(newCardImgSrc) {
  const startCard = document.getElementById("startCard");
  startCard.src = newCardImgSrc; 
}

// EXERCISE 2: Write a function that 
function validateAnswer(event) {
  console.log(event);
  console.log(ALL_CARDS);
  console.log(currentCard)
}