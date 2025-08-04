let cards = [];
let sum = 0;
let hasBlackJack = false;

// Objects

let player ={
  name: "Pranshu",
  chips: 200
}
let playerEl=document.getElementById("player-el")
let isAlive = false;
let message = "Do you want to draw a new card?";
let cardEl = document.getElementById("cardEl");
let mes = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

playerEl.textContent= player.name+": $" +player.chips 

// Random generator

function getRandomCard() {
  let n = Math.floor(Math.random() * 13) + 1;
  if (n > 10) return 10;
  else if (n === 1) {
    return 11;
  } else return n;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard , secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  mes.textContent = message;
}

function newCard() {
 

  if(isAlive===true && hasBlackJack===false){
       console.log("Drawing a new card from the deck");
  let newCard = getRandomCard();
  sum += newCard;
  cards.push(newCard);
  }
  renderGame();
}
