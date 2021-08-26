
console.log("blackjack")
let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cards = [firstCard, secondCard]

let sum = firstCard + secondCard;

let hasBlackjack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return 5
}


function startGame() {
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
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    console.log(cards)
    renderGame();
}

