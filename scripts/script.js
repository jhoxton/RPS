//Game variables
const choice = ['Rock', 'Paper', 'Scissors'];

let playerWins = 0;
let compWins = 0;


let playerSelection;
let compSelection;
let input;



//DOM elements
document.getElementById("rock").addEventListener("click", () => updatePlayerChoice('Rock'));
document.getElementById("paper").addEventListener("click", () => updatePlayerChoice('Paper'));
document.getElementById("scissors").addEventListener("click", () => updatePlayerChoice('Scissors'));





let rockImg = document.createElement("img");
let paperImg = document.createElement("img");
let scissorsImg = document.createElement("img");

// let player_choice_text = document.createElement("span")
// let comp_choice_text = document.createElement("span")


rockImg.src = "./icons/rock.svg";
paperImg.src = "./icons/paper.svg";
scissorsImg.src = "./icons/scissors.svg";



//Game prompts and results
let promt = document.querySelector("#game_prompt");
promt.innerHTML = "Make a selection to play, first to 5 wins.";

let gameCount = 0;
let round_number = document.querySelector("#round_number");
round_number.innerHTML = gameCount;


let result = document.querySelector("#result");
let compScoreOutput = document.querySelector("#comp_score");
let playerScoreOutput = document.querySelector("#player_score");


compScoreOutput.innerHTML = compWins;
playerScoreOutput.innerHTML = playerWins;



function updateBoard() {
    player_choice_text.innerHTML = "";
    comp_choice_text.innerHTML = "";
    printResults(playerSelection, compSelection);

    compScoreOutput.innerHTML = compWins;
    playerScoreOutput.innerHTML = playerWins;

    if ((playerWins == 5) || (compWins == 5)) { //Check score after updateing board
        document.getElementById('rock').classList.add('game_over');
        document.getElementById('paper').classList.add('game_over');
        document.getElementById('scissors').classList.add('game_over');

        endGame();
    } else {
        promt.innerHTML = "Make a selection to play";
    }
}

function printResults(playerSelection, compSelection) {
    var playerChoiceIcon = document.getElementById("player_choice_img");
    var compChoiceIcon = document.getElementById("comp_choice_img");

    while (playerChoiceIcon.hasChildNodes()) { //This removes the last image that was there
        playerChoiceIcon.removeChild(playerChoiceIcon.lastChild);
    }
    if (playerSelection === "Rock") {
        player_choice_text.innerHTML = "Rock"
        playerChoiceIcon.appendChild(rockImg);

    } else if (playerSelection === "Paper") {
        player_choice_text.innerHTML = "Paper"
        playerChoiceIcon.appendChild(paperImg);

    } else if (playerSelection === "Scissors") {
        player_choice_text.innerHTML = "Scissors"
        playerChoiceIcon.appendChild(scissorsImg);

    }

    while (compChoiceIcon.hasChildNodes()) { //This removes the last image that was there
        compChoiceIcon.removeChild(compChoiceIcon.lastChild);
    }
    if (compSelection === "Rock") {
        comp_choice_text.innerHTML = "Rock"
        compChoiceIcon.appendChild(rockImg);
    } else if (compSelection === "Paper") {
        comp_choice_text.innerHTML = "Paper"
        compChoiceIcon.appendChild(paperImg);
    } else if (compSelection === "Scissors") {
        comp_choice_text.innerHTML = "Scissors"
        compChoiceIcon.appendChild(scissorsImg);
    }

}

//Random comp pick
function updateCompSelection() {
    let compResult = choice[Math.floor(Math.random() * choice.length)];
    return compResult;
}

//Sets player choice, then runs the game
function updatePlayerChoice(input) {
    round_number.innerHTML = gameCount;

    if (input === "Rock") {
        playerSelection = "Rock";
    } else if (input === "Paper") {
        playerSelection = "Paper";
    } else if (input === "Scissors") {
        playerSelection = "Scissors";
    }
    gameCount++;
    compSelection = updateCompSelection(); //Random comp choice
    playRound(playerSelection, compSelection); //Runs the game
}

function playRound(playerSelection, compSelection) {

    if (playerSelection == "Paper" && compSelection == 'Rock') {
        result.innerHTML = "You win, Paper beats Rock";
        playerWins++;
    }
    else if (playerSelection == "Scissors" && compSelection == 'Paper') {
        result.innerHTML = "You win, Scissors beats Rock";
        playerWins++;

    }
    else if (playerSelection == "Rock" && compSelection == 'Scissors') {
        result.innerHTML = "You win, Rock beats Scissors ";
        playerWins++;

    }
    else if (playerSelection == "Rock" && compSelection == 'Paper') {
        result.innerHTML = "You lose, Paper beats Rock";
        compWins++;
    }
    else if (playerSelection == "Paper" && compSelection == 'Scissors') {
        result.innerHTML = "You lose, Scissors beats Paper ";
        compWins++;
    }
    else if (playerSelection == "Scissors" && compSelection == 'Rock') {
        result.innerHTML = "You lose, Rock beats Scissors ";
        compWins++;
    }
    else if (playerSelection == "Scissors" && compSelection == 'Scissors') {
        result.innerHTML = "Draw: Scissors v Scissors";
    }
    else if (playerSelection == "Rock" && compSelection == 'Rock') {
        result.innerHTML = "Draw: Rock v Rock";
    }
    else if (playerSelection == "Paper" && compSelection == 'Paper') {
        result.innerHTML = "Draw: Paper v Paper";
    }
    updateBoard(playerSelection, compSelection);

}


function endGame() {

    if (playerWins > compWins) {
        result.innerHTML = "<span class='result_prompt'>You won the game.</span>";
        promt.innerHTML = "<span id='reload' class='reset_prompt'> Game over. Click here to replay</span>";
        reload();
    } else if (compWins > playerWins) {
        result.innerHTML = "<span class='result_prompt'>You lost the game.</span>";
        promt.innerHTML = "<span id='reload' class='reset_prompt'> Game over. Click here to replay</span>";
        
        reload();
    }
}
function reload() {
    const refresh = document.querySelector("#reload");
    refresh.addEventListener('click', () => {
        window.location.reload();

    })
}