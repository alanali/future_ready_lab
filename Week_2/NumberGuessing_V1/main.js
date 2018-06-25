/*eslint-env browser*/

function playGame() {
    
    var low = parseInt(prompt("Enter a low number: "));
    var high = parseInt(prompt("Enter a high number: "));

    var target = Math.round(Math.random() * (high - low) + low);

    var userGuess  = parseInt(prompt("Enter a guess between " + low + " and " + high));

    var totalGuess = 1;

    while (userGuess !== target) {
        if (userGuess < target) {
            userGuess = parseInt(prompt("Your guess is too low: "));
            totalGuess++;
        } if (userGuess > target) {
            userGuess = parseInt(prompt("Your guess is too high: "));
            totalGuess++;
        }
    }

    alert("You took " + totalGuess + " guesses to guess the number " + target);
    
}
