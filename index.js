let firstCard = 2 + Math.floor(Math.random() * 10);

let secondCard = 2 + Math.floor(Math.random() * 10);

const sum = firstCard + secondCard;

console.log(firstCard, secondCard);

if (sum <= 20) {
	console.log("Do you want to draw a new card?");
} else if (sum === 21) {
	console.log("You have a BlackJack!");
} else {
	console.log("You'are out of the game!");
}

let age = 22;

if (age <= 21) {
	console.log("You can not enter to the club");
} else {
	console.log("Welcome to the club");
}
