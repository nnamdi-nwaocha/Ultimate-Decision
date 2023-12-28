var number1 = Math.floor(Math.random() * 6);
var number2 = Math.floor(Math.random() * 6);

// change image
if (number1 === 0){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}else if (number1 === 1){
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}else if (number1 === 2){
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}else if (number1 === 3){
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}else if (number1 === 4){
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}else{
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

if (number2 === 0){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}else if (number2 === 1){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}else if (number2 === 2){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}else if (number2 === 3){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}else if (number2 === 4){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}else{
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

// decision of winner
if (number1 > number2){
    document.querySelector("h2").innerHTML = "🚩 Player One Wins";
}else if (number1 === number2){
    document.querySelector("h2").innerHTML = "😑 Its a draw 😑";
}else {
    document.querySelector("h2").innerHTML = "Player Two Wins 🚩";
}
