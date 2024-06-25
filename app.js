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
    const resultdiv = document.querySelector("#result");
    const scorediv = document.querySelector("#score");

    let result = "";
    if(humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        result = "Tie";
        humanscore++;
        computerscore++;
        console.log('tie');
    } else if(
        (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")){
            humanscore++;
            result = "human wins";
            console.log("human wins");
        } else {
            computerscore++;
            result = "computer wins";
            console.log("computer wins");
    }

    resultdiv.textContent = result;
    scorediv.textContent = "human: " + humanscore + " - computer: " + computerscore;

    if(humanscore === 5 || computerscore === 5) {
        if(humanscore > computerscore) {
            resultdiv.textContent = "human wins";
        } else {
            resultdiv.textContent = "computer wins";
        }
        alert("game over " + `${resultdiv.textContent}`);
        humanscore = 0;
        computerscore = 0;
    }
}

document.querySelector("#rock").addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});
document.querySelector("#paper").addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});
document.querySelector("#scissors").addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});