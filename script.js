function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    switch (choice) {
        case 0:
            return "rock";
        
        case 1:
            return "paper";
        
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter Rock, Paper or Scissors");
    

    if (choice === null){
        return "Please enter a value";
    }
    else{
        choice.toLowerCase();
        if(choice == "rock" || choice == "paper" || choice == "scissors"){
            return choice;
        }
        else {
            return "Please enter a valid value";
        }
    }
    
}

function playRound(humanChoice,computerChoice) {
    if(humanChoice == "rock"){
        if(computerChoice == "rock"){
            return "Draw";
        }
        else if(computerChoice == "scissors"){
            humanScore++;
            return "Victory";
        }
        else{
            computerScore++;
            return "Defeat";
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "paper"){
            return "Draw";
        }
        else if(computerChoice == "rock"){
            humanScore++;
            return "Victory";
        }
        else{
            computerScore++;
            return "Defeat";
        }
    }
    else{
        if(computerChoice == "scissors"){
            return "Draw";
        }
        else if(computerChoice == "paper"){
            humanScore++;
            return "Victory";
        }
        else{
            computerScore++;
            return "Defeat";
        }
    }
}

let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log(humanChoice);
console.log(computerChoice);

console.log(playRound(humanChoice,computerChoice));
console.log(humanScore);
console.log(computerScore);