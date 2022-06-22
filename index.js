function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    const number = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] === number) return true
    }
  }
  return false
}


// Alternate solution from video for optimization. Add console logs at each line to see what the code is doing:
// function hasTargetSum(array, target) {
//   const seenNumbers = {};
//   for (let i = 0; i < array.length; i++) {
//     const number = target - array[i];
//     if (seenNumbers[number]) return true;
//     seenNumbers[array[i]] = true;
//   }
//   return false
// }

// Another solution from video with best optimiaztion O(n) since there's only 1 loop and uses an object which is faster than array.
// function hasTargetSum(array, target) {
//   const seenNumbers = {};
//   for (const number of array) {
//     const complement = target - number;
//     if (complement in seenNumbers) return true;
//     seenNumbers[number] = true;
//   }
//   return false
// }

// The problem in my words:
// we're writing a function that takes in an array of integers and a separate integer that's the target. 
// If any pair of numbers in the array adds up to the target number, it should return true. 
// otherwise, it'll return false if none of the integer pairings add up to the target number.


/* 
  Write the Big O time complexity of your function here
  2 for loops over length n + 2 constants
  for loops cancel out the 2 constants since the constants only run once
  we want the worst case scenario for how long it will take to run, which is 
  O(n^2)
  pronounced Big O squared

*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target) {
    iterate through the array to add each number pair through the array length
    if added pair = target, return true
      else return false
  }
*/

/*
  Add written explanation of your solution here
  theres a for loop that iterates over the array length.
  we've stored the target number less the array interator in a variable.
  we have a nested for loop that iterates over the array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", hasTargetSum([1, 2, 5], 4));

  // My tests:
console.log("Expecting: true");
console.log("=>", hasTargetSum([2, 2, 4], 4))

console.log("Expecting: false");
console.log("=>", hasTargetSum([], null))

console.log("Expecting: false");
console.log("=>", hasTargetSum([2, 6, 4], 4))

console.log("Expecting: false");
console.log("=>", hasTargetSum([], 4))

console.log("Expecting: false");
console.log("=>", hasTargetSum([1], 4))
}

module.exports = hasTargetSum;
