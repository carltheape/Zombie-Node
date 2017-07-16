// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
var inquirer = require("inquirer");

var zHealth = 25;
var pHealth = 75;
var pick = 0;
var zPick = 0;


console.log("\nYou must fight the zombie, you start at "+pHealth+" , and the zombie starts at "+zHealth)

function roll(){inquirer
	.prompt([
	{	type: "list",
		message: "Choose a number",
		choices: ["1", "2", "3", "4", "5"],
		name: "pick"
	},
])
	.then(function(inquirerResponse){
	var rando = Math.floor(Math.random() * 5) + 1;
	pick = inquirerResponse.pick;
	zPick = Math.floor(Math.random() * 5) + 1;
	if  (pick == zPick){
		zHealth = zHealth - rando;
		console.log("------------------------------------------------------");
		console.log("\n"+rando+(" damage was dealt to the Zombie!"));
	}
	else {pHealth = pHealth - rando;
		console.log("------------------------------------------------------");
		console.log("\n"+rando+(" damage was dealt to you!"));
	}
	console.log("\nthe Zombie rolled "+zPick+". You picked "+pick+".");
	console.log("\nYour health is "+pHealth+". the zombie health is "+zHealth+".");
	console.log("------------------------------------------------------");
	if (pHealth <= 0){console.log("You Lose   \n(X╭╮X)")}
	else if(zHealth <=0){console.log("You Win   \n( ┏'_')┏ ")}
	else{ roll()};

});
};
roll();
