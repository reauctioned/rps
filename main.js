function playGame(playerMove){
    const computerMove = pickComputerMove()

    let result = ''

    if(playerMove === 'rock'){
        if(computerMove == 'rock')
            {result = 'Its a tie!'}
        else if (computerMove === 'paper')
            {result = 'You win!'}
        else
        {result = 'You lose!'}
    }
    else if(playerMove === 'paper'){
        if(computerMove === 'paper')
            {result = 'Its a tie!'}
        else if (computerMove === 'rock')
            {result = 'You win!'}
        else
        {result = 'You lose!'}
    }
    else if(playerMove === 'scissor'){
        if(computerMove === 'scissor')
            {result = 'Its a tie!'}
        else if (computerMove === 'paper')
            {result = 'You win!'}
        else
        {result = 'You lose!'}
    }}


    document.querySelector('.para').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`




function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }