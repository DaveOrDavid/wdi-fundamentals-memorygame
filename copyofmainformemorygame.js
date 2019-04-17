//Dave original code
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []

var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped king");

var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
	}
}
if (cardsInPlay.length === 2 && cardOne === cardTwo) {
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again");  
var flipCard = function(cardId){
console.log("User flipped " + cards[cardId])
cardsInPlay.push(cards[cardId]);
checkForMatch();
}
flipCard(0);
flipCard(2);



// Kathy code

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []

var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
var flipCard = function(cardId) {
	checkForMatch();
if (cardsInPlay.length == 2) {
	 if (cardsInPlay[0] === cardsInPlay[2]){
	alert("You found a match!");
	 } else {
	alert("Sorry, try again.");
	}
console.log("User flipped");
}
flipCard(0);
flipCard(2);
};