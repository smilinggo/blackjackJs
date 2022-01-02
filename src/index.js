function randomNum() {
    return Math.floor(Math.random() * 10) + 2;
}
let hasBlackJack = false;
let isAlive = true;

let firstCard = randomNum();
let secondCard = randomNum();
let sum = firstCard + secondCard + 4

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Awesome! You've got Blackjack! ")
    hasBlackJack = true;
} else {
    console.log("You're out of the game!")
    isAlive = false;
}
