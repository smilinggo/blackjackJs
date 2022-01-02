function randomNum() {
    return Math.floor(Math.random() * 10) + 2;
}

let cards = []
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

const reducer = (accumulator, curr) => accumulator + curr;
const drawCard = () => {
    let card = randomNum()
    cards.push(card)
}

const sum = () => {
    cardsTotal = cards.reduce(reducer)
    return cardsTotal;
}



const startGame = () => {
    drawCard();
    drawCard();
    renderGame();
}


function renderGame() {
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = "Sum: " + sum();
    if (cardsTotal <= 20) {
        message = ("Do you want to draw a new card? ")
    } else if (cardsTotal === 21) {
        message = ("Wohoo! You've got Blackjack! ")
        hasBlackJack = true
    } else {
        message = ("You're out of the game! ")
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    document.getElementById("startButton-el").style.visibility = 'hidden'
    if (!isAlive) {
        console.log("You lose!")
    }
    console.log("Drawing a new card from the deck!")
    drawCard();
    renderGame();
   
}

function newHand() {
    cards = []
    startGame();
}