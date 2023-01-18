// What is wrong with this code?
//     1. First, find the line that contains the problem. Write it down.
//     2. Which debug method did you use to find the bug?
//     3. Explain the bug in your own words.
//     4. Fix the code and submit it all.

// 1) i noticed im getting 0 back from function but i have 3 'n'
// debugging the function with a debugger showed me that im catching all 3 of the 'n' 
// but not updating my counter.
// I noticed that counter updating has a syntax/logical error it is not advancing as it
// counter + 1 instead of counter += 1 ot counter ++
// I changed the counter updating to counter += 1. and the counting worked
function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));
