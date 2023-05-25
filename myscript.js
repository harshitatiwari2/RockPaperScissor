function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    let a = Math.floor(Math.random()*3);
    let ans = arr[a].toLowerCase();
    
    return ans;
}


let playerSelection;
let playerScore = 0;
let cpuscore = 0;

const ps = document.querySelector('#pscore');
const cs = document.querySelector('#cscore');

let buttons = document.querySelectorAll(".button");
const container = document.querySelector('.container');
const info = document.querySelector('#info');
const photo = document.querySelector('.photo');
const computerChoiceContainer = document.createElement('div');
const help = document.querySelector('h4');


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    help.classList.add('help');
    playerSelection =  e.target.name.toLowerCase()
    const computerSelection = getComputerChoice();
    pickWinner(playerSelection, computerSelection);
    
   
    computerChoiceContainer.classList.add('computer-choice');

    computerChoiceContainer.innerHTML = `<img src="./images/${computerSelection.toLowerCase()}.png" alt="${computerSelection}" class="computer-choice-img">`;

    // Append computer choice container to the main container
    photo.appendChild(computerChoiceContainer);

    }
    )
});





function addRoundInfo() {
   
    if (playerScore === 5) {
        info.classList.add('result');
        info.innerHTML = '<p>&#127882;You won the game! Cheers.&#127882;</p>';
      } else  if (cpuscore === 5) {
        info.classList.add('result');
        info.innerHTML = '<p>&#128531; Oh no! You lost the game. &#128531; </p>';
      }
    
    
    if (checkForWinner(playerScore, cpuscore)) {
        
        setTimeout(function() {
            const enddiv = document.querySelector('.enddiv');

            const newgame = document.createElement('div');
            newgame.classList.add('gameDiv');
            
          
            const playagain = document.createElement('button');
            playagain.textContent = 'Play Again';
          
            const question = document.createElement('h3');
            question.textContent = 'Wanna play again?';
          
            newgame.appendChild(question);
            newgame.appendChild(playagain);
            enddiv.appendChild(newgame);
        
          
            playagain.addEventListener('click', () => {
              playerScore = 0;
              cpuscore = 0;
              ps.textContent =  `YOU :  ${playerScore}`
              cs.textContent = `CPU :  ${cpuscore}`;
              newgame.remove();
              info.textContent = '';
              info.classList.remove('result');
              computerChoiceContainer.textContent = '';
    
            });

            console.log("Delayed execution after 3 seconds");
          }, 4000);

   
      }
      
}


function checkForWinner(playerScore, cpuscore) {
    if (playerScore === 5 || cpuscore === 5)  {
          return true;
    }
    
    else {
    return false;
    }
};


function pickWinner(playerSelection, computerSelection) {
 
    const info = document.querySelector('#info');

    if (playerScore  === 5 || cpuscore === 5) 
        return;
    if (playerSelection === computerSelection) {
        info.innerHTML = '<div>Round draw.</div>';
    }
    else if ( playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" ||
              playerSelection === "scissors" && computerSelection === "paper") {
               
               playerScore++;

               if (playerSelection === "scissors") {
                    info.textContent =  `You win, ${playerSelection} beat ${computerSelection}.`;
               } else {
                    info.textContent =  `You win, ${playerSelection} beats ${computerSelection}.`;
               }
    }
    else {
        cpuscore++;
        if (computerSelection === "scissors") {
            info.textContent =  `CPU wins,  ${computerSelection} beat ${playerSelection}.`;
           }
        else{
            info.textContent = `CPU wins,  ${computerSelection} beats ${playerSelection}.`;
        }
        
       
    }
    ps.textContent =  `You :  ${playerScore}`
    cs.textContent = `CPU :  ${cpuscore}`;
    addRoundInfo();
}


