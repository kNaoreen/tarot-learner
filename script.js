addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("clickMeButton").onclick = function() {myFunction()};
});

function myFunction() {
  window.alert("Hello! You clicked this button :o")
}