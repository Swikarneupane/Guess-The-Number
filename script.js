let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;

let low = 1;
let high = 100;

function init(){
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
    startGameView();
}

function updateRange() {
    const rangeOutput = document.getElementById('rangeOutput');
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + '%';
    rangeOutput.style.marginRight = (100 - high) + '%';
    rangeOutput.classList.add('flash');

    const lowValue = document.getElementById('low');
    lowValue.style.flex = low + '%';
    lowValue.style.background = '#ef7b54';

    const space = document.getElementById('space');
    space.style.flex = (high - low) + '%';
    space.style.background = '#83e1d0';

    const highValue = document.getElementById('high');
    highValue.style.flex = (100 - high) + '%';
    highValue.style.background = '#ef7b54';
}

function gameEnded() {
    document.getElementById('btn-new-game').style.display = 'inline';
    document.getElementById('guess').setAttribute('readonly', 'readonly');
}

function newGame() {
    window.location.reload();
}

function startGameView() {
    document.getElementById('btn-new-game').style.display = 'none';
    document.getElementById('new-game').style.display = 'none';
    document.getElementById('inside-game').style.display = 'none';
}

function gameStart() {
    document.getElementById('first-page').style.display = 'none';
    document.getElementById('new-game').style.display = 'none';
    document.getElementById('inside-game').style.display = 'block';
    document.getElementById('new-game').style.display = 'block';
}

function compareGuess() {
    const userGuess = Number(document.getElementById('guess').value)
    userGuesses.push(" " + userGuess);
    document.getElementById('prevGuesses').innerHTML = userGuesses;
    attempts++;
    document.getElementById('prevAttempts').innerHTML = attempts; 
    
    if(attempts < maxGuesses) {
        if(userGuess > computerGuess) {
            if(userGuess < high) high = userGuess;
            document.getElementById('yourOutput').innerText = "Your guess is too high";
            document.getElementById('guess').value = '';
        }
        else if(userGuess < computerGuess){
            if(userGuess > low) low = userGuess;
            document.getElementById('yourOutput').innerText = "Your guess is too low";
            document.getElementById('guess').value = '';
        }
        else {
            document.getElementById('yourOutput').innerText = "Correct! You got it in " + attempts + " attempts";
            gameEnded();
        }
    } else {
        if(userGuess > computerGuess) {
            document.getElementById('yourOutput').innerHTML = "YOU LOSE! <br> The correct number was " + computerGuess;
            gameEnded();
        }
        else if(userGuess < computerGuess){
            document.getElementById('yourOutput').innerHTML = "YOU LOSE! <br> The correct number was " + computerGuess;
            gameEnded();
        }
        else {
            document.getElementById('yourOutput').innerText = "Correct! You got it in " + attempts + " attempts";
            gameEnded();
        }
    }
    updateRange();
}

function easyMode(){
    maxGuesses = 10;
    gameStart();
}

function hardMode(){
    maxGuesses = 5;
    gameStart();
}