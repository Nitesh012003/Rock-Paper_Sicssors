function getComputerChoice() {
    let x= Math.floor(Math.random()*3);
    if (x==0)
    return "rock";
    else if (x==1)
    return "paper";
    else (x==2)
    return "scissors";
}

function playRound(playerSeclection, computerSelection){
    const a="rock";
    const b="scissors";
    const c="paper";
    if (playerSeclection.toLowerCase() === computerSelection.toLowerCase())
    return "IT'S A DRAW";
    else if (computerSelection==a){
        if(playerSeclection.toLowerCase()==c)
        return "You Win! Paper beats Rock";
        else
        return "You Lose! Rock beats Scissors";
    }
    else if (computerSelection.toLowerCase()==b){
        if (playerSeclection==a)
        return "You Win! Rock beats Scissors";
        else
        return "You Lose! Scissors beats Paper";
    }
    else if(computerSelection==c){
        if (playerSeclection.toLowerCase()==b)
        return "You Win! Scissors beats Paper";
        else
        return "You Lose! Paper beats Rock";
        
    }
    
}

const playerSeclection= prompt();
const computerSelection= getComputerChoice();
console.log(playRound(playerSeclection, computerSelection));
console.log(playerSeclection, computerSelection);