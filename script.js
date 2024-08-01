function random_number() {
    var num = Math.floor(Math.random() * 6) + 1;
    return num;
}
var num_1 = random_number();
var num_2 = random_number();

var img = document.querySelectorAll(".player img")

img[0].setAttribute("src", "./images/dice" + num_1 + ".png")
img[1].setAttribute("src", "./images/dice" + num_2 + ".png")

var header = document.querySelector("h1.header");
if(num_1 > num_2){
    header.textContent = "Player 1  Wins! 🚩"
}
else if(num_1 < num_2){
    header.textContent = "Player 2  Wins! 🚩"
}
else{
    header.textContent = "Draw!"
}