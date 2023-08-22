var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImageSource = "./images/dice"+ randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
//for left hand side image
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//for right hand side image
var randomImageSource2 = "./images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//for winning of player
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins 🚩";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 2 Wins";
}
else{
    document.querySelector("h1").textContent = "Draw";
}