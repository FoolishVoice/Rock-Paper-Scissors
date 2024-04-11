function getComputerChoice() {
    let number = (Math.floor(Math.random() * 100)); 
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
let playerScore = 0;
let computerScore = 0;
let tie = 0;

function playRound() {
    let playerSelection = prompt('rock, paper or scissor?',' ').toLowerCase();
    const computerSelection = getComputerChoice();
    if ((playerSelection == 'rock') && (computerSelection == 'scissor')) {
        playerScore++;
        return 'You Win! Rock beats Scissor';
    }
    else if ((playerSelection == 'scissor') && (computerSelection == 'paper')) {
        playerScore++;
        return 'You Win! Scissor beats Paper';
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        playerScore++;
        return 'You Win! Paper beats Scissor';
    }
    else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
        computerScore++;
        return 'You Lose! Paper beats Rock';
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'scissor')) {
        computerScore++;
        return 'You Lose! Scissor beats Paper';
    }
    else if ((playerSelection == 'scissor') && (computerSelection == 'rock')) {
        computerScore++;
        return 'You Lose! Rock beats Scissor';
    }
    else if (playerSelection == computerSelection) {
        return 'It\'s a tie!';
    }
    else {
        return 'Invalid';
    }

}
 

function playGame() {
    console.log(playRound());

    console.log(playRound());

    console.log(playRound());

    console.log(playRound());

    console.log(playRound());

    

    console.log(endMessage())
}



function endMessage() {
    if (playerScore > computerScore) {
        return 'You\'ve Won the Game of Rock, Paper, Scissor!';
    }   else if (playerScore < computerScore) {
        return 'You\'ve Lost the Game of Rock, Paper, Scissor. Better luck next time.';
    }   else if (playerScore === computerScore) {
        return 'You\'ve Tied';
    } 
}


playGame();
