// let the computer generate a random number from 1 to 3, and store it in a variable

function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}


// convert the result from the computer into a string.

function convertComputerChoice(pick){

    if (pick === 1){
        console.log('The computer picked Rock!'); 
        return 'rock';
    } else if (pick === 2){
        console.log('The computer picked Paper!')
        return 'paper'
    } else if (pick ===3){
        console.log('the computer picked Scissors!')
        return 'scissors'
    }
}


// ask from input from the user.


// validate the input from the user.

function validateChoice(pick){

    if (pick === 'rock'){
        console.log('You picked Rock !');
    } else if (pick === 'paper'){
        console.log('You picked Paper !');
    } else if (pick === 'scissors'){
        console.log('You picked Scissors !');
    } else {
        throw new Error ('You did not pick a valid choice.');
    }

}


// compare both inputs to see who wins

function compareChoice(pick1, pick2){

    if(pick1 === 'rock' && pick2 === 'scissors'){
        console.log('Win')
        return('win');
    } else if (pick1 === 'paper' && pick2 === 'rock'){
        console.log('Win')
        return('win');
    } else if (pick1 === 'scissors' && pick2 === 'paper'){
        console.log('Win')
        return('win');
    } else if (pick1 === pick2){
        console.log('tie')
        return('tie');
    } else {
        console.log('loss')
        return('loss');
    }
};


function runGame(){
    var compChoice = getComputerChoice();
    var compChoiceConverted = convertComputerChoice(compChoice);
    //take input from the player and convert to lowercase.
    var playerChoice = prompt('Please pick one: Rock, Paper or Scissors.');
    playerChoice = playerChoice.toLowerCase();
    validateChoice(playerChoice)
    return(compareChoice(playerChoice, compChoiceConverted));
}

//make a function to check which score to increment.

function addScore(result) {
    if (result === 'win'){
        playerWinCount++;
    } else if (result === 'loss'){
        computerWinCount++;
    }
}

//make a function that will not increase i when its a tie.

function incrementi(result) {
    if (result == 'tie'){
        console.log('this round doesnt count')
    } else {
        i++;
        
    }
} 

// make a function to check the best of 5 winner.

function overallWinner(){
    if (playerWinCount > computerWinCount) {
        console.log('YOU ARE THE GRAND WINNER OF THIS BAATTTTTLLEEEEE !')
    } else if (computerWinCount > playerWinCount){
        console.log('THE COMPUTER IS VICTORIOUS ONCE MORE !!!!!!')
    }
}
// make a while loop to run the game 5 times.

i=1
var playerWinCount = 0
var computerWinCount = 0

while (i <= 5) {
    var result = runGame()
    addScore(result);
    incrementi(result);
    console.log(`the score is ${playerWinCount} - ${computerWinCount}`)
}

overallWinner()
