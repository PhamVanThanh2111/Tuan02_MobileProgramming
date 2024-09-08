// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

var score = 20;

function restoreInitialValues() {
    score = 20;
    // 2. Restore the initial UI states (message, score, number, guess input)
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.getElementById('score').textContent = score;
}

document.querySelector('.reset').addEventListener('click', function () {
    restoreInitialValues();
});

// Select the 'again' button and add event handler
document.querySelector('.again').addEventListener('click', function () {
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    var guessInput = +document.querySelector('.guess').value;
    if (score > 0) {   
        if (guessInput === secretNumber) {
            score++;
            document.getElementById('score').textContent = score;
            document.querySelector('.message').textContent = 'Correct Number!';
        }
        else {
            score--;
            document.getElementById('score').textContent = score;
            document.querySelector('.message').textContent = 'Try again!';
        }
        document.querySelector('.number').textContent = secretNumber;
    } else {
        document.querySelector('.message').textContent = 'You lost the game!';
    }
});