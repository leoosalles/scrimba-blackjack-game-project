let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

document.getElementById('new-card-btn').style.display = 'none'

function resetGame() {
    cards = [];
    sum = 0;
    hasBlackJack = false;
    isAlive = false;
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
};

function startGame() {
    resetGame()

    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    document.getElementById('start-game-btn').style.display = 'inline-block';
    document.getElementById('new-card-btn').style.display = 'inline-block';

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(' - ');
    sumEl.textContent = `Sum: ${sum}`;

    const newGameBtn = document.getElementById('start-game-btn');
    const newCardBtn = document.getElementById('new-card-btn');

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        newCardBtn.style.display = 'inline-block';
        newGameBtn.style.display = 'none';

    } else if (sum === 21) {
        hasBlackJack = true;
        message = "You've got Blackjack!"
        newCardBtn.style.display = 'none';
        newGameBtn.style.display = 'inline-block'
    } else {
        isAlive = false;
        message = "You're out of the game!"
        newCardBtn.style.display = 'none';
        newGameBtn.style.display = 'inline-block'
    };

    messageEl.textContent = message;
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let drawnCard = getRandomCard();
        sum += drawnCard;
        cards.push(drawnCard);

        renderGame();
    }
}