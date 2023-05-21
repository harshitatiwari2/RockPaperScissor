function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissor'];
    let a = Math.floor(Math.random()*3);
    let ans = arr[a].toUpperCase();
    
    return ans;
}

let playerSelection;
let playerScore = 0;
let cpuscore = 0;
// Add a click event listener to the document


let buttons = document.querySelectorAll(".button");



for(let i =0; i<buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () => {
      playerSelection = button.textContent.toUpperCase();
      pickWinner(playerSelection, getComputerChoice());
    });
}
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       playerSelection = button.textContent.toUpperCase();
//       pickWinner(playerSelection, getComputerChoice());
//     }
//     )
// });

function addRoundInfo() {

    if (playerScore === 5) {
        console.log("You win the game");
      } else  if (cpuscore === 5) {
        console.log("You lose the game");
      }

    if (checkForWinner(playerScore,cpuscore)) 
    {
        playerScore = 0;
        cpuscore = 0;
        console.log("The game will reset now.");
    }

}


function checkForWinner(playerScore, cpuscore) {
    if (playerScore === 5 || cpuscore === 5) 
    return true;
    else {
    return false;
    }
};


function pickWinner(playerSelection, computerSelection) {

    if (playerScore  === 5 || cpuscore === 5) 
        return;
    if (playerSelection === computerSelection) {
        console.log("Round draw");
    }
    else if ( playerSelection === "ROCK" && computerSelection === "SCISSOR" || playerSelection === "PAPER" && computerSelection === "ROCK" ||
              playerSelection === "SCISSOR" && computerSelection === "PAPER") {
               playerScore++;
               console.log(`PLayer Wins, ${playerSelection} beats ${computerSelection}`) ;
               console.log(`PLayer Score: ${playerScore} CPU : ${cpuscore}`) ;

    }
    else {
        cpuscore++;
        console.log(`Computer wins,  ${computerSelection} beats ${playerSelection}`);
        console.log(`PLayer Score: ${playerScore} CPU : ${cpuscore}`) ; 
    }
    
    addRoundInfo();
}

// function game (){
//     if (playerScore  === 5 || cpuscore === 5) {
//         return
//     }

