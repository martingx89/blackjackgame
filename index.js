let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
	name: "Mat",
	chips: 145,
};
playerEl.textContent = `${player.name}: $${player.chips}`;

function startGame() {
	isAlive = true;
	hasBlackJack = false;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	sum = firstCard + secondCard;
	cards = [firstCard, secondCard];

	renderGame();
}

function renderGame() {
	cardsEl.textContent = "Cards: " + cards;
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You have a BlackJack!";
		hasBlackJack = true;
	} else {
		message = "You'are out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}

function newCard() {
	if (!hasBlackJack && isAlive) {
		let additionalCard = getRandomCard();
		sum += additionalCard;
		cards = [...cards, additionalCard];
		renderGame();
	}
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
}

// let age = 22;

// if (age <= 21) {
// 	console.log("You can not enter to the club");
// } else {
// 	console.log("Welcome to the club");
// }

// console.log(hasBlackJack);
