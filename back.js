function getComputerChoice(){
    const options = ["rock","paper","scissors"];
    const choose = Math.floor(Math.random() * options.length);
    console.log("Computer chose " + options[choose]);
    return options[choose];
}

function getUserChoice(){
    const select = prompt("Rock, Paper or Scissors?").toLowerCase();
    if(select == "rock" || select == "scissors" || select == "paper"){
        console.log("You chose " + select);
        return select;
    }
    else{
        console.log("Invalid option, please try again")
        return getUserChoice();
    }
}

function playRound(player, computer) {
    if (player == computer) {
        return "You tied the round.";
    }
    else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
    ) {
        return "You won the round.";
    }
    else{
        return "You lost the round.";
    }
}

function game(){
    let pScore = 0;
    let cScore = 0;
    for (i = 0; i < 5; i++) {
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
game();
