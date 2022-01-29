//First part of the activity


// const args = process.argv;
// console.log(args.splice(2, 2)); //at position 2 remove 2 elements


//Second part of the activity
const args = process.argv.slice(2);
//add the rest of arguments
let sum = 0;
for (let i = 0; i < args.length; i++) {
  sum += Number(args[i]); //Number is used to convert array to string
}
console.log(sum);

//The code above works, now I want to try to create a function to clean it up (as asked in the activity)

//While you can easily implement this program without the use of any functions, you can do better than that! What one function could you definitely create to help clean it up, and what should it be responsible for?
//My answer: A function to add the numbers
//The answer: We could create a function sum that takes in two numbers and returns their sum. It should return the sum and therefore not have any side effects


// function sum(numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += Number(num);
//   }
//   return sum;
// }

