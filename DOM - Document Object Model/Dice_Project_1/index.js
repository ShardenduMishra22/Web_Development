var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image_dice = "dice" + randomNumber1 + ".png";
var image_src = "./images/" + image_dice;  // Corrected path
document.querySelectorAll("img")[0].setAttribute("src", image_src);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image_dice2 = "dice" + randomNumber2 + ".png";
var image_src2 = "./images/" + image_dice2;  // Corrected path
document.querySelectorAll("img")[1].setAttribute("src", image_src2);

if (randomNumber1 > randomNumber2){
    document.querySelectorAll("h1")[0].textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelectorAll("h1")[0].textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelectorAll("h1")[0].textContent = "Draw!!";
}