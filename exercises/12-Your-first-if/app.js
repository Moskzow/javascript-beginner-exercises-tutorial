var total = prompt('How many km are left to go?');

// Your code below:

totalLeft = () => (total > 100) ? "We still have a bit of driving left to go"
    : (total > 50 <= 100) ? "We'll be there in 5 minutes"
    : (total <= 50) ? "I'm parking. I'll see you right now";

// const answer = x > 10 ? "greater than 10"
//     : x < 5 ? "less than 5"
//     : "between 5 and 10";