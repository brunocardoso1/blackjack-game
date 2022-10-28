let cards = [];
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Bruno",
  coins: 182,
};

playerEl.textContent = player.name + ": $" + player.coins;

function getRandomCard() {
  random = Math.floor(Math.random() * 13) + 1;

  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " - " + cards[i];
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    hasBlackJack = true;
    messageEl.textContent = "You've got Blackjack! ";
  } else {
    messageEl.textContent = "You're out of the game! ";
    isAlive = false;
  }
}

function drawCard() {
  if (isAlive === true && hasBlackJack === false) {
    draw = getRandomCard();
    sum += draw;
    cards.push(draw);
    renderGame();
  }
}
