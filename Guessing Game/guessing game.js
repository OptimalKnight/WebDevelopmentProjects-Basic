let maximum = parseInt(prompt("Enter the maximun number: "));
while (!maximum || maximum <= 0) {
    maximum = parseInt(prompt("Invalid number! Enter the maximum number again: "));
}

const target = Math.floor(Math.random() * maximum) + 1;
let guess = prompt("Enter your first guess: ");
let attempts = 1;
while (parseInt(guess) !== target) {
    attempts++;
    if (guess > target) {
        guess = prompt("Too high, guess again: ");
        if (guess === 'q') break;
    }
    else {
        guess = prompt("Too low, guess again: ");
        if (guess === 'q') break;
    }
}

if (guess === 'q') {
    console.log("You decided to quit the game.");
}
else {
    console.log(`Congrats! You guessed the number in ${attempts} attempts!`);
}