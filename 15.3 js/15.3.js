// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30

// 1) function returns Nan, logging all the values it is adding up 1 by one(only 5) 
// I notice arr[10] is undefined, there is no 10 place in the arr as we run from 0 to 9. 
// I changed arr[10] to arr[9];
// 2) the function wants the sum of all 10 numbers however it's adding up only 5 numbers,
// Running the function after the fix gave me 34...hi that is not what I was expecting!
// I than realize i only return the sum of 5 elements and the array is 10 elements.
// so i brute force it with returning all of them(no loop)

function getSumOfEven(arr){
return arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
}
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));


// 3) this will make it more generic tho

// function getSumOfEven(arr){
//   let sum = 0 ;
//  arr.forEach(element => {
//     sum+=element
//  });
//  return sum;
// }