function getComputerChoice(){
    const options = ["rock","paper","scissors"];
    const choose = Math.floor(Math.random() * options.length);
    console.log("Computer chose " + options[choose]);
    return options[choose];
}
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
});
function playRound(player) {
    let computer = getComputerChoice();
    if (player == computer) {
        result = "You tied the round.";
    }
    else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
    ) {
        result = "You won the round.";
    }
    else{
        result = "You lost the round.";
    }
    const res = document.querySelector('#result');
    res.textContent = result;
    result.appendChild(res);
}

function game(){
    let pScore = 0;
    let cScore = 0;
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result == "You won the round."){
            pScore++;
        }
        else if(result == "You lost the round."){
            cScore++;
        }
    if(pScore > cScore){
        console.log("You won the game, congrats");
    }
    else if(pScore < cScore){
        console.log("You lost the game,better luck next time");
    }
    else{
        console.log("There are no losers in life");
    }
}
