/*eslint-env browser*/

function playGame() {
    
    //Ask for number range
    var low = parseInt(prompt("Enter a low number: "));
    var high = parseInt(prompt("Enter a high number: "));
    
    //Generate random number in range
    var target = Math.round(Math.random() * (high - low) + low);
    
    //Ask for guess
    var userGuess  = parseInt(prompt("Enter a guess between " + low + " and " + high));

    var totalGuess = 1;
    
    //Keep asking and giving hints until number guessed
    while (userGuess !== target) {
        if (userGuess < target) {
            userGuess = parseInt(prompt("Your guess is too low: "));
            totalGuess++;
        } if (userGuess > target) {
            userGuess = parseInt(prompt("Your guess is too high: "));
            totalGuess++;
        }
    }
    
    //End of game
    alert("You took " + totalGuess + " guesses to guess the number " + target);
    
}
