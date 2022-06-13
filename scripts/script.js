//Game variables
const choice = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
let gameCount = 0;

let playerSelection;
let compSelection;


//DOM elements
document.getElementById("rock").addEventListener("click", () => updatePlayerChoice('Rock'));
document.getElementById("paper").addEventListener("click", () => updatePlayerChoice('Paper'));
document.getElementById("scissors").addEventListener("click", () => updatePlayerChoice('Scissors'));

//Sets player choice, then runs the game
function updatePlayerChoice(input){
    if(input === "Rock"){
        playerSelection = "Rock";
    } else if (input ==="Paper"){
        playerSelection = "Paper";
    } else if (input ==="Scissors"){
        playerSelection = "Scissors";
    } else{
        
    }
    compSelection = updateCompSelection(); //Random comp choice
    playRound(playerSelection, compSelection); //Runs the game
}

function playRound(playerSelection, compSelection) {
    gameCount ++;
    console.log("Game: ", gameCount);
    console.log("Player: ",playerSelection);
    console.log("Comp: ",compSelection);

}

//Random comp pick
function updateCompSelection(compSelection){ 
    let compResult = choice[Math.floor(Math.random() * choice.length)];
    return compResult;
  }