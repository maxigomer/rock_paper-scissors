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

let buttons = document.querySelector("#buttonsPlayer");

buttons.addEventListener("click",(event) =>{
    let target = event.target;

    switch(target.id) {
        case "buttonRock":
            console.log("Rock");
            break;
        case "buttonPaper":
            console.log("Paper");
            break;
        case "buttonScissors":
            console.log("Scissors");
            break;
    }
});