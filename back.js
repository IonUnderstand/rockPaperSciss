let pScore = 0;
let cScore = 0;

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
        pScore++;
    }
    else{
        result = "You lost the round.";
        cScore++;
    }
    const res = document.querySelector('#result');
    res.textContent ='Computer chose ' + computer + '.' + result;
    const ann = document.querySelector('#rounds');
    ann.textContent = 'You have ' + pScore + ' win(s) and the robot has ' + cScore + 
    ' , the first to five wins the game.';
    announce(pScore, cScore);
}
function announce(p,c){
    if(p >= 5 || c >= 5){
        if(p > c){
            const win = document.querySelector('#end');
            win.textContent = 'YOU WON THE PREVIOUS ROUND!!';
            pScore = 0;
            cScore = 0;
            res.textContent = '';
            ann.textContent = '';
        }
        else{
            const win = document.querySelector('#end');
            win.textContent = 'YOU LOST THE PREVIOUS ROUND!!';
            pScore = 0;
            cScore = 0;
            res.textContent = '';
            ann.textContent = '';
        }
    }
}