console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice;
}

let humanscore = 0;
let computerscore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return "Tie";
    } else if(
        (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")){
            humanscore++;
            return "human wins";
        } else {
            computerscore++;
            return "computer wins";
        }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice, computerChoice));


function playGame(){
    humanscore = 0; computerscore = 0;
    for(let i = 0; i < 5; i++){
        console.log("Round " + (i + 1));
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
    if(humanscore > computerscore) {
        console.log("human wins");
    } else{
        console.log("computer wins");
    }
}

playGame();