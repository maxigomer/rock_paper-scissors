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

let score = 0;
let computerScore = 0;

function game(player,computer){
    if(player == "rock"){
        if(computer == "scissors"){
            score++;
        }
        else if(computer == "paper"){
            computerScore++;
        }
    }

    if(player == "paper"){
        if(computer == "rock"){
            score++
        }
        else if(computer == "scissors"){
            computerScore++;
        }
    }

    if(player == "scissors"){
        if(computer == "paper"){
            score++;
        }
        else if(computer == "rock"){
            computerScore++;
        }
    }
}


const computerContainer = document.querySelector("#computerChoice");
const computerChoice = document.createElement("img");


const container = document.querySelector("#playerChoice");
const choice = document.createElement("img");
let buttons = document.querySelector("#buttonsPlayer");

const resultContainer = document.querySelector("#result");
const result = document.createElement("div");

buttons.addEventListener("click",(event) =>{
    let target = event.target;
    if(score != 3 && computerScore != 3){

        switch(target.id) {
            case "buttonRock":
                choice.src = "images/rock.png";
                choice.id = "rock";
                break;
            case "buttonPaper":
                choice.src = "images/paper.png";
                choice.id = "paper";
                break;
            case "buttonScissors":
                choice.src = "images/scissors.png";
                choice.id = "scissors";
                break;
        }
        container.appendChild(choice);
        let computerX = getComputerChoice();
        computerChoice.src=`images/${computerX}.png`;
        computerChoice.id = computerX;
        computerContainer.appendChild(computerChoice);
        game(choice.id,computerChoice.id);
    }

    if(score == 3){
        result.textContent = "Player Wins";
        resultContainer.appendChild(result);
    }
    else if(computerScore == 3){
        result.textContent = "Computer Wins";
        resultContainer.appendChild(result);
    }

});
