

const choice = ['Rock', 'Paper', 'Scissors'];
let gameCount = 1;

let playerWins = 0;
let computerWins = 0;

document.getElementById('round_number').innerHTML = gameCount;

document.getElementById('player_score').innerHTML = playerWins;
document.getElementById('comp_score').innerHTML = computerWins;


let compSelWrap = document.querySelector("#comp_choice")
compSelWrap.textContent = computerPlay();


// Rock Paper Scissors 


playerSelection= 0;
// let gameCount = 1;


function game(){
  for(i=0;i<5;i++){
    let playerSelection = checkInput();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("Round: ", gameCount++);
  }
  checkScore();
}

//Checking player input
function checkInput(playerSelection) {
  // playerSelection = prompt("Choose Rock, Paper, or Scissors");
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}
  
// Getting computer input
function computerPlay(){
  let compResult = choice[Math.floor(Math.random() * choice.length)];
  return compResult;
}
  

function checkScore() {
  if(playerWins < computerWins) {
    console.log("You won");
  } else if(computerWins < playerWins) {
    console.log("You lost");
  } else if (playerWins === computerWins){
    console.log("It was a draw");
  }
 }



function playRound(playerSelection, computerSelection) {
  
  if(playerSelection == "Paper" && computerSelection == 'Rock'){
    console.log("You win, Paper beats Rock");
    playerWins ++;
  } 
  else if (playerSelection == "Scissors" && computerSelection == 'Paper'){
    console.log("You win, Scissors beats Rock ");
    playerWins ++;

  }
  else if (playerSelection == "Rock" && computerSelection == 'Scissors'){
    console.log("You win, Rock beats Scissors ");
    playerWins ++;

  }

  else if(playerSelection == "Rock" && computerSelection =='Paper'){
    console.log("You lose, Paper beats Rock");
    computerWins ++;
  } 
  else if (playerSelection == "Paper" && computerSelection == 'Scissors'){
    console.log("You lose, Scissors beats Paper ");
    computerWins ++;

  }
  else if (playerSelection == "Scissors" && computerSelection == 'Rock'){
    console.log("You lose, Rock beats Scissors ");
    computerWins ++;
  }

  else if(playerSelection == "Scissors" && computerSelection == 'Scissors'){
    console.log("Draw: Scissors v Scissors");
  } 
  else if (playerSelection == "Rock" && computerSelection == 'Rock'){
    console.log("Draw: Rock v Rock")
  }
  else if (playerSelection == "Paper" && computerSelection == 'Paper'){
    console.log("Draw: Paper v Paper")
    
  }
  playerSelection = 0;
  computerSelection = 0;
}



// game();