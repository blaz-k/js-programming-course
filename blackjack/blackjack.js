
console.log("blackjack")
let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Blaz",
    chips: 120
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " + player.chips + " EUR"


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

        if (randomNumber > 10 ) {
            return 10
        } else if (randomNumber === 1 ){
            return 11
        } else {
            return randomNumber
        }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent += cards[i] + " "
    }


    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        hasBlackjack = true;
        message = "You've got Blackjack!!";

    }else {
        isAlive = false;
        message = "You are out of the game!";
    }
    messageEl.textContent = message;

}



function newCard() {
    if ( isAlive === true && hasBlackjack === false ) {
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard);
        console.log(cards)
        renderGame();

    }

}

