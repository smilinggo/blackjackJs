function randomNum() {
    return Math.floor(Math.random() * 10) + 2;
}
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

let firstCard = randomNum();
let secondCard = randomNum();
let sum = firstCard + secondCard


function startGame() {
    cardsEl.textContent += firstCard + " " + secondCard
    sumEl.textContent += sum;
    if (sum <= 20) {
        message = ("Do you want to draw a new card? ")
    } else if (sum === 21) {
        message = ("Wohoo! You've got Blackjack! ")
        hasBlackJack = true
    } else {
        message = ("You're out of the game! ")
        isAlive = false
    }

    // 3. Log it out!
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!")
}