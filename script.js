addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("button1").onclick = function() {
      updateCardImage("https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg")
    };

    document.getElementById("button2").onclick = function() {
      updateCardImage("https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg")
    }
});

// EXERCISE 3:
// Write a function that updates the card image
// Look at lines 3 and 7 for what the function should be called, and examples of what we'd expect to pass into the function (the parameter(s))
