function getcomputerSelection()
{
//  let finalValue = prompt("Computer, Please enter your choice:(rock, paper, or scissors):").toLowerCase();
    let  finalValue= Math.floor(Math.random()*3);
    if(finalValue<1)
        {
            return "rock";
        }
        else if(finalValue>1)
        {
            return "paper";
        }
        else
        {
            return "scissors";
        }
}

function gethumanSelection()
{
    let humanInput = prompt("Please enter your choice:(rock, paper, or scissors):").toLowerCase();
    return humanInput;
}

 function playGame()
 {
  
 let humanScore=0;
 let computerScore=0;
 const humanSelection = gethumanSelection();
 const computerSelection = getcomputerSelection();
 
function playRound(humanChoice, computerChoice)
{
    
    if(humanChoice === computerChoice)
        {
            return "it is a tie. you both picked ${humanSelection}";
        }
        else if(humanChoice === "rock" && computerChoice === "scissors")
        {
            return "You win! rock beats scissor";
            humanScore++;
        }
        else if(humanChoice === "rock" && computerChoice === "paper")
        {
            return "You win! paper beats rock";
            humanScore++;
        }
         else if(humanChoice === "scissors" && computerChoice === "paper")
        {
            return "You win! scissors beats paper";
            humanScore++;
        }
        else
        {
            return "you lose! ${humanChoice} beats ${humanSelection}";
            computerScore++;
        }
     
}


 for(let i=0;i<5;i++)
      {
          playRound(humanSelection, computerSelection);
          console.log("Final score: " + humanScore + " to " + computerScore + "");
      }
    }

playGame();



