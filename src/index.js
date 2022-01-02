function randomNum() {
    return Math.floor(Math.random() * 10) + 2;
}

let cards = []
const reducer = (accumulator, curr) => accumulator + curr;
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

let firstCard = randomNum();
let secondCard = randomNum();
let sum = firstCard + secondCard
cards.push(firstCard)
cards.push(secondCard)


function startGame() {
    renderGame();
}


function renderGame() {
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = "Sum: " + cards.reduce(reducer);
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
    let nextCard = randomNum();
    cards.push(nextCard)
    sum += nextCard;
    renderGame();
   
}