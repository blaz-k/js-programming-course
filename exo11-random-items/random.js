
let hands = ["rock", "paper", "scissors"]


function getHand() {
    let randomItem = Math.floor(Math.random() * 3)
    return hands[randomItem]
}

console.log(getHand())