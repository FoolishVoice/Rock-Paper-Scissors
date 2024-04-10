function getComputerChoice() {
    let number = (Math.floor(Math.random() * 100)+1); 
        if (number<33.33) {
            return 'rock';
        }
        else if (number>33.33 && number<66.66) {
            return 'paper';
        }
        else {
            return 'scissor';
        }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock') && (computerSelection === 'scissor')) {
        return 'Rock wins';
    }
    else if ((playerSelection === 'scissor') && (computerSelection === 'paper')) {
        return 'Scissor wins';
    }
    else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        return 'Paper wins';
    }
    else {
        return 'You lost';
    }

}

const playerSelection = prompt('rock, paper or scissor?',' ');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))