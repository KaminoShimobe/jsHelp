//All variables being used declared here. The alphabet is an array that is checking for lower case numbers
var alphabet = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var chances = 10;
var guesses = "";
//The winning letter will be determined inside the while loop.
var winningLetter;

//This game will go u
while(chances > 0){
//This is the winning letter which is a random letter out of the 26 in the alphabet.
winningLetter = alphabet[Math.floor(Math.random() * 26)];

//A prompt for your guess. A better way would be recommended probably using html input because this right now will only update once the game is over. 
var guess = prompt("Enter your guess here");
if(guess == winningLetter){
Selects a new random letter and adds 1 win. Also the previous guesses are reset.
wins += 1;
winningLetter = alphabet[Math.floor(Math.random() * 26)];
guesses = "";
} else {
//Addeds 1 loss and takes away from one of your chances. Also adds one of your guesses to the list.
losses += 1;
chances -= 1;
guesses += ", " + winningLetter;
}

//This here updates the html. Make sure you have corresponding ids for each.

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("chances").innerHTML = "Guesses Left: " + chances;
document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guesses;
}
