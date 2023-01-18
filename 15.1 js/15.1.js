// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// I got error in compiling the file saying 
//                1) arr1 is undefined
// so I logged arr1 at the start of the function and realized it coming in undefined
// so I looked at the function summoning and notice im missing a comma.
//                2) putting a value into a constant variable
// compiled once again and got message im putting a value into a constant variable
// so I changed the variable const sum to let sum
//                3) return value is not what expected
// after logging the return value of the function I got undefined and
// realized that the function does not have a return value
//so I placed a return sum at the and of the function
//                4) return value is not what expected
// the return value wasn't right as I figured ot that the function
// should give me the sum of the numbers in the two arrays.
// so going on step by step on what the function do i realize arr2 is not an array
// so I checked the function call and noticed arr2 is an array but has '()' 
// inside of it. so deleting the bracers made the function work as intended
//                       And I got 100 ;)
function getSum(arr1, arr2) {
  let sum = 0;
  
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}

console.log(getSum([1, 2, 3],[5, 66, 23]));
