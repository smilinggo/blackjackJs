let player = {
    name: "Toney",
    chips: 200
}
console.log(player.name);
let cards = []
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent += player.name + ": $" + player.chips


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
    isAlive = true;
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
    if (isAlive && !hasBlackJack){
        document.getElementById("startButton-el").style.visibility = 'hidden'
        console.log("Drawing a new card from the deck!")
        drawCard();
        renderGame();
    }
   
}

function newHand() {
    cards = []
    startGame();

}

function randomNum() {
    randomCard = Math.floor( Math.random()*13 ) + 1;
    console.log(randomCard)

    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
    return randomCard
    }
}