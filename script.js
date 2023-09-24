/**
 *  Tarot Card Class and instantiations
 */

// EXERCISE 1: Take a look at this class, and at the tarot cards instantiated on lines 18-22
class TarotCard {
  name = "";
  imgSrc = "";
  uprightMeaning = "";

  // The constructor function on a class is called when you use the new keyword to instantiate a new class object, see examples a bit below!
  //Added uprightMeaning property! 
  constructor(name, imgSrc, uprightMeaning) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.uprightMeaning = uprightMeaning 
  }
}

//added uprightMeaning values 

const ALL_CARDS = [
  new TarotCard("The Fool", "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", "Beginnings, innocence, spontaneity, a free spirit"),
  new TarotCard("The Magician", "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", "Manifestation, resourcefulness, power, inspired action"),
  new TarotCard("The High Priestess", "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", "Intuition, sacred knowledge, divine feminine, the subconscious mind"),
  new TarotCard("The Empress", "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", "Femininity, beauty, nature, nurturing, abundance"),
  new TarotCard("The Emperor", "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", "Authority, establishment, structure, a father figure"),
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
  console.log(currentCard.uprightMeaning) //this was to test to see if the uprightMeaning was being printed, not necessary anymore but I wanted to show my work :)! 

  const clickedButton = event.target // const for storing which button was clicked 
  const buttonText = clickedButton.textContent // const for storing the text corresponding to the button that was clicked 
  
  //conditional to check whether the text of the button matches the uprightMeaning to print "correct" if the text and uprightMeaning match and "oh no" if they do not.
  if (buttonText === currentCard.uprightMeaning) { 
    console.log("CORRECT!")
  } else {
    console.log("Oh no :(!")
  }


}