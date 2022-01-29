//Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

//Example input: node dice-roller.js 3
//Expected output: Rolled 3 dice: 2, 6, 5 (or any three random numbers from 1 to 6)

const args = process.argv;
let num = args.slice(2);

const rollDice = function(num) { //Function that takes a number
  let results = []; //empty array
  for (let i = 1; i <= num; i++) { //iterate between 1 die (because we cannot roll 0 dice) and the given number
    results.push(Math.floor(Math.random() * 6) + 1); //add to the array a random number from 1 to 6
  }
  return console.log(`Rolled ${num} dice: ${results.join()}`); //Print the text as string. To convert array with result of dice we use method .join
};
rollDice(num); //call the function

//Previous 

// const args = process.argv;
// let num = args.slice(2);
