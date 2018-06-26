/*eslint-env browser*/

function playGame() {
    
    var good = false
    
    //Ask for number range and check if input is number
    while (good == false) {
        while (isNaN(low)) {
            var low = parseInt(prompt("Enter a low number: "));
            while (low < 0){
                low = parseInt(prompt("Enter a number greater than 0: "));
            }
        } while (isNaN(high)) {
            var high = parseInt(prompt("Enter a high number: "));
            while (high > 1000){
                high = parseInt(prompt("Enter a number less than 1000: "));
            }
        }
        if (low >= high) {
            alert("The lower bond must be lower than the upper bond.");
            var temp = low;
            low = high;
            high = temp;
        } else {
            good = true;
        }
    }

    //Generate random number in range
    var target = Math.round(Math.random() * (high - low) + low);
    
    var userGuess = parseInt(prompt("Enter a guess between " + low + " and " + high));
    
    //Keep asking and giving hints until number guessed
    while (userGuess < low || userGuess > high) {
        userGuess = parseInt(prompt("Enter a guess between " + low + " and " + high));
    }
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
    
    //End of game
    alert("You took " + totalGuess + " guesses to guess the number " + target);
    
}
