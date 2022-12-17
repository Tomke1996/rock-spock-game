const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const allGameIcons = document.querySelectorAll('.far');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const playerHand = document.getElementById('playerHand');
const computerHand = document.getElementById('computerHand');
const hands = document.querySelectorAll('.central-container img');

const resultText = document.getElementById('result-text');

const choices = {
    rock: { name: 'rock', defeats: ['scissors', 'lizard']},
    paper: { name: 'paper', defeats: ['rock', 'spock']},
    scissors: { name: 'scissors', defeats: ['paper', 'lizard']},
    lizard: { name: 'lizard', defeats: ['paper', 'spock']},
    spock: { name: 'spock', defeats: ['scissors', 'rock']}
};

let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

// Reset all
function resetAll() {
    resetSelected();
    playerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScore = 0;
    computerScoreEl.textContent = computerScore;
    resultText.textContent = '';
    playerHand.src = './images/rock.png';
    computerHand.src = './images/rock.png';
}

// Reset selected icons and resultText and hands
function resetSelected() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected');
    });
    resultText.textContent = '';
    playerHand.src = './images/rock.png';
    computerHand.src = './images/rock.png';
}

// Get Computer Choice
function computerRandomChoice() {
    const computerChoiceNumber = Math.random();
    if (computerChoiceNumber < 0.2) {
        computerChoice = 'rock';
    } else if (computerChoiceNumber <= 0.4) {
        computerChoice = 'paper';
    } else if (computerChoiceNumber <= 0.6) {
        computerChoice = 'scissors';
    } else if (computerChoiceNumber <= 0.8) {
        computerChoice = 'lizard';
    } else {
        computerChoice = 'spock';
    }
}

// Display Computer Choice
function displayComputerChoice() {
    switch (computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerHand.src = `./images/${computerChoice}.png`;
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerHand.src = `./images/${computerChoice}.png`;
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerHand.src = `./images/${computerChoice}.png`;
            break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerHand.src = `./images/${computerChoice}.png`;
            break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerHand.src = `./images/${computerChoice}.png`;
            break;
        default:
            break;
    }
}

// Get Results  
function updateScore(playerChoice) {
    // Draw
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's draw!";
    } else {
        const choice = choices[playerChoice];
        // console.log(choice);
        // Win
        if (choice.defeats.indexOf(computerChoice) > -1) {
            resultText.textContent = 'You Win!';
            playerScore++;
            playerScoreEl.textContent = playerScore;
        // Lose
        } else {
            resultText.textContent = 'You Lose!';
            computerScore++;
            computerScoreEl.textContent = computerScore;
        }
    }
}

function checkResult(playerChoice) {
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

// Add Animation on both hands
function animation() {
    playerHand.style.animation = 'shakePlayer 2s ease';
    computerHand.style.animation = 'shakeComputer 2s ease';
}

function select(playerChoice) {
    resetSelected();
    animation();
    setTimeout(() => {
        checkResult(playerChoice);
        switch (playerChoice) {
            case 'rock':
                playerRock.classList.add('selected');
                playerHand.src = `./images/${playerChoice}.png`;
                break;
            case 'paper':
                playerPaper.classList.add('selected');
                playerHand.src = `./images/${playerChoice}.png`;
                break;
            case 'scissors':
                playerScissors.classList.add('selected');
                playerHand.src = `./images/${playerChoice}.png`;
                break;
            case 'lizard':
                playerLizard.classList.add('selected');
                playerHand.src = `./images/${playerChoice}.png`;
                break;
            case 'spock':
                playerSpock.classList.add('selected');
                playerHand.src = `./images/${playerChoice}.png`;
                break;
            default:
                break;
        }
    }, 2000);
    // Enable new animations on every second turn
    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = "";
        });
    });
}

resetAll();