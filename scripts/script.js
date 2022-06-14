//Game variables
const choice = ['Rock', 'Paper', 'Scissors'];

let playerWins = 0;
let computerWins = 0;
let gameCount = 0;

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
promt.innerHTML = "Make a selection to play.";
let result = document.querySelector("#result");

let compScoreOutput = document.querySelector("#comp_score");
let playerScoreOutput = document.querySelector("#player_score");


compScoreOutput.innerHTML = computerWins;
playerScoreOutput.innerHTML = playerWins;



function updateBoard() {
    // console.log("Score and board updated");
    player_choice_text.innerHTML = "";
    comp_choice_text.innerHTML = "";


    printResults(playerSelection, compSelection);
    compScoreOutput.innerHTML = computerWins;
    playerScoreOutput.innerHTML = playerWins;




    promt.innerHTML = "Make a selection to play!";
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

    console.log("Comp: ", compSelection);
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
    if (gameCount != 5) {
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
    } else {
        endGame(playerWins, computerWins);
    }
}

function playRound(playerSelection, compSelection) {

    // console.log("Player: ", playerSelection);
    // console.log("Comp: ", compSelection);


    updateBoard(playerSelection, compSelection);
}

function endGame() {
    promt.innerHTML = "Game over. Click here to replay";

    if (playerWins === 5) {
        result.innerHTML = "You won";

    } else if (computerWins === 5) {
        result.innerHTML = "You lost";

    }
}
