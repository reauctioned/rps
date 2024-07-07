
    const score = 
        JSON.parse(localStorage.getItem('score'))

let isautoPlaying = false
let intervalId
function autoPlay(){
        if(!isautoPlaying){

        intervalId =  setInterval(function() {
                const playerMove = pickComputerMove()
                playGame(playerMove)
            },1000)
            document.querySelector('.auto').innerHTML = "AutoPlaying..."
            isautoPlaying = true
        }else{
    clearInterval(intervalId)
    document.querySelector('.auto').innerHTML = "AutoPlay"
    isautoPlaying= false}
    
}


function playGame(playerMove){
    const computerMove = pickComputerMove()
    let result = ''
    

    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'tie!';
        } else if (computerMove === 'paper'){
            result = 'You lose!';
        } else {
            result = 'You win!';
        }
    } else if(playerMove === 'paper'){
        if(computerMove === 'paper'){
            result = 'tie!';
        } else if (computerMove === 'rock'){
            result = 'You win!';
        } else {
            result = 'You lose!';
        }
    } else if(playerMove === 'scissors'){
        if(computerMove === 'scissors'){
            result = 'tie!';
        } else if (computerMove === 'paper'){
            result = 'You win!';
        } else {
            result = 'You lose!';
        }
    } else if(playerMove == 'reset'){
        score.wins = 0
        score.losses = 0
        score.ties = 0
        
    }
     else {
        result = 'Invalid move!';
    }
if (result === "You win!"){
    score.wins += 1
     
} else if (result === 'You lose!'){
    score.losses += 1
} else if (result === "tie!"){
    score.ties += 1
} 

localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.para').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result} <br>
                    wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = ''

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors'
    }

    return computerMove;
}
