// let the computer generate a random number from 1 to 3, and store it in a variable

function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}

var compChoice = getComputerChoice();

// convert the result from the computer into a string.

function convertComputerChoice(pick){

    if (pick === 1){
        return 'rock';
    } else if (pick === 2){
        return 'paper'
    } else if (pick ===3){
        return 'scissors'
    }
}

var compChoiceConverted = convertComputerChoice(compChoice)

// ask from input from the user.

var playerChoice = prompt('Please pick one: Rock, Paper or Scissors.');
playerChoice = playerChoice.toLowerCase();

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

validateChoice(playerChoice)

// compare both inputs to see who wins

function compareChoice(pick1, pick2){

    if

}

//print out the winner.