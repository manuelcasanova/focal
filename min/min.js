
// const min = function(numbers) {//I'm going to try a methods that puts the array in order and then removes the tail
// const putArrayInOrder = numbers.sort();
// const headOfSortedArray = putArrayInOrder[1];
// return headOfSortedArray;
// }
// I believe the previous one does not work because the .sort method changes the items to strings (not numnbers) so the order is not what you would expect.


// const min = function(numbers) {
//   const sortedNumbers = numbers.sort((a,b)=>a - b);
//   return sortedNumbers[0];
// };


// //Sort method as weel but different way
// const min = function(numbers) {
//   let compare = function(a, b){
//     return a - b;
//   }
//   let sorted = numbers.sort(compare)
//   return sorted [0]
// }

// //For each loop
// const min = function(numbers) {
//   let first = numbers[0];

//   numbers.forEach((number) => {
//     if (number < first) {
//       first = number;
//     }
//   });
//   return first;
// };

//with traditional loop
const min = function(numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
};



/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs ${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);