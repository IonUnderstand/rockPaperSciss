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
        return "It's a tie!";
    }
    else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
    ) {
        return "You win";
    }
    else{
        return "You lose";
    }
}
const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
