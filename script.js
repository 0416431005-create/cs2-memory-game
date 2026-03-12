console.log("sript started");
//variable to track guesses
let guesses = 0;

//var to track 1st card pick
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId)  {
    // printl click to console to test that click works
    console.log("click");
    // get the html card
    let card = document.getElementById("cardId")
// change color to flip card and reveal text
    card.style.color = "white";
    card.style.backgroundColor = "black";

if (firstCardId == "") {
    // store 1st card id
    firstCardId = cardId;
    console.log(first = " + secondCardId);
}
else {
    // store 2nd card id
    secondCardId = cardId;
    checkForMatch(checkForMatch, 1000);
    console.log("second = " + secondCardId);
}
}

function checkForMatch () {
    // get the card elements
    let firstCard = document.getElementById(firstCardId);
    let secondCard = document.getElementById(secondCardId);

    if (firstCard.innnerText == secondCard.inertText) {
        //green bg color to show match
        firstCard.style.backgroundColor = "lightgreen";
        secondCard.style.backgroundColor = "lightgreen";
    }
    else {
        //cards don't match, reset the styles
        first.style.Color = "chocalate";
        first.style.backgroundColor = "chocalate";
        secondCard.style.Color = "chocalate";
        secondCard.style.backgroundColor = "chocalate";
    }

    // reset for next pick
    firstCardId = "";
    secondCardId = "";
}
