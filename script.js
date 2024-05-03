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

let playerSelection = '';

function playRound() {
//    let playerSelection = prompt('rock, paper or scissor?',' ').toLowerCase();
    const computerSelection = getComputerChoice();
    
    if ((playerScore == 5) || (computerScore == 5)) {
        endMessage();
    }
    else if ((playerSelection == 'rock') && (computerSelection == 'scissor')){
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
 
//This is adding 3 buttons as choice for R.P.S.
let result = 'The results: ';

const body = document.querySelector("body");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");
const div = document.createElement("div");
const para = document.createElement("p");


rock.addEventListener('click', () => {
    playerSelection = 'rock';
    result += playRound() + ", ";
    return para.textContent = result;
});

rock.textContent = "Rock";
body.appendChild(rock);

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    result += playRound() + ", ";
    return para.textContent = result;
});

paper.textContent = "Paper";
body.appendChild(paper);

scissor.addEventListener('click', () => {
    playerSelection = 'scissor';
    result += playRound() + ", ";
    return para.textContent = result;
});

scissor.textContent = "Scissor";
body.appendChild(scissor);




div.appendChild(para);
body.appendChild(div);

// function playGame() {
//    console.log(playRound());

//    console.log(playRound());

//    console.log(playRound());

//    console.log(playRound());

//    console.log(playRound());

    

//    console.log(endMessage())
//}



function endMessage() {
    if (playerScore > computerScore) {
        return alert('You\'ve Won the Game of Rock, Paper, Scissor with a score of 5 points');
    }   else if (playerScore < computerScore) {
        return alert('You\'ve Lost the Game of Rock, Paper, Scissor. Better luck next time.');
    }   else if (playerScore === computerScore) {
        return alert('You\'ve Tied');
    } 
}


// playGame();
