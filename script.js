addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("button1").onclick = function() {
      updateCardImage("https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg")
    };

    document.getElementById("button2").onclick = function() {
      updateCardImage("https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg")
    };

    document.getElementById("button3").onclick = function() {
      updateCardImage("https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg")
    };

    document.getElementById("button4").onclick = function() {
      updateCardImage("https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg")
    }
});


function updateCardImage (newCardImgSrc) {
  const startCard = document.getElementById("startCard") 
  startCard.src = newCardImgSrc 
}