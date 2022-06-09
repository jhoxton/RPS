

const choice = ['rock', 'paper', 'scissors'];
let gameCount = 1;

let playerWins = 0;
let computerWins = 0;

document.getElementById('round_number').innerHTML = gameCount;

document.getElementById('player_score').innerHTML = playerWins;
document.getElementById('comp_score').innerHTML = computerWins;


let compSelWrap = document.querySelector("#comp_choice")
compSelWrap.textContent = computerPlay();


// ROCK PAPER SCISSORS 


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
  // playerSelection = prompt("Choose rock, paper, or scissors");
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
  
  if(playerSelection == "paper" && computerSelection == 'rock'){
    console.log("You win, paper beats rock");
    playerWins ++;
  } 
  else if (playerSelection == "scissors" && computerSelection == 'paper'){
    console.log("You win, scissors beats rock ");
    playerWins ++;

  }
  else if (playerSelection == "rock" && computerSelection == 'scissors'){
    console.log("You win, rock beats scissors ");
    playerWins ++;

  }

  else if(playerSelection == "rock" && computerSelection =='paper'){
    console.log("You lose, paper beats rock");
    computerWins ++;
  } 
  else if (playerSelection == "paper" && computerSelection == 'scissors'){
    console.log("You lose, scissors beats paper ");
    computerWins ++;

  }
  else if (playerSelection == "scissors" && computerSelection == 'rock'){
    console.log("You lose, rock beats scissors ");
    computerWins ++;
  }

  else if(playerSelection == "scissors" && computerSelection == 'scissors'){
    console.log("Draw: scissors v scissors");
  } 
  else if (playerSelection == "rock" && computerSelection == 'rock'){
    console.log("Draw: rock v rock")
  }
  else if (playerSelection == "paper" && computerSelection == 'paper'){
    console.log("Draw: paper v paper")
    
  }
  playerSelection = 0;
  computerSelection = 0;
}



// game();