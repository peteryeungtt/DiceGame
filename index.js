var playerOne = prompt("Enter Player 1 Name:");
var playerTwo = prompt("Enter Player 2 Name:");
var playerOneN = playerOne.slice(0, 1).toUpperCase() + playerOne.slice(1, playerOne.lenght).toLowerCase();
var playerTwoN = playerTwo.slice(0, 1).toUpperCase() + playerTwo.slice(1, playerTwo.lenght).toLowerCase();
document.querySelector(".pOne").innerHTML = playerOneN;
document.querySelector(".pTwo").innerHTML = playerTwoN;
document.querySelector(".buttonClick").onclick = function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = playerOneN + " Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = playerTwoN + " Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
