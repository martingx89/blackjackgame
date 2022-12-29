let firstCard = 2 + Math.floor(Math.random() * 10);

let secondCard = 2 + Math.floor(Math.random() * 10);

let cards = [firstCard, secondCard];

let hasBlackJack = false;

let isAlive = true;

let message = "";

let sum = firstCard + secondCard;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
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
	let additionalCard = 2 + Math.floor(Math.random() * 10);
	sum += additionalCard;
	cards = [...cards, additionalCard];
	startGame();
}

// let age = 22;

// if (age <= 21) {
// 	console.log("You can not enter to the club");
// } else {
// 	console.log("Welcome to the club");
// }

// console.log(hasBlackJack);
