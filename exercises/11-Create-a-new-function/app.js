/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom (min, max) {
    return Math.floor(Math.random()*(max-min+1)+0);
}

let randomizer = generateRandom (0,9)
console.log(randomizer);