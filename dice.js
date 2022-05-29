if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomImage1Source = "images/dice"+randomNumber1+".png";

    document.querySelector(".dice .img1").setAttribute("src", randomImage1Source);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImage2Source = "images/dice"+randomNumber2+".png";

    document.querySelector(".dice .img2").setAttribute("src", randomImage2Source);


    if(randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw";
    }
    else if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!! 🚩";
    }
    else if(randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!! 🚩";
    }

}


