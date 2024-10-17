import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let tellerWinstGebruiker = 0;
let tellerWinstComputer = 0;
let choices = ['rock', 'paper', 'scissors'];

while (tellerWinstGebruiker < 3 && tellerWinstComputer < 3) {
    let keuzeGebruiker = await userInput.question("Kies (rock, paper, scissors): ");
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    console.log(keuzeGebruiker + " VS " + computerChoice);

    if (keuzeGebruiker == "rock" && computerChoice == "scissors" ||
        keuzeGebruiker == "scissors" && computerChoice == "paper" ||
        keuzeGebruiker == "paper" && computerChoice == "rock") {
        
        tellerWinstGebruiker++;
        console.log("Gebruiker heeft gewonnen! " + tellerWinstGebruiker + "/3");
    } else if (keuzeGebruiker == computerChoice) {
        console.log("Gelijkspel!");
    } else {
        tellerWinstComputer++;
        console.log("De computer heeft gewonnen! " + tellerWinstComputer + "/3");
    }
}

if (tellerWinstComputer == 3) {
    console.log("De computer wint het spel!");
} else if (tellerWinstGebruiker == 3) {
    console.log("GOOD JOB!je hebt het spel gewonnen!");
}

userInput.close();
process.exit();
