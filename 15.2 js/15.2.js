// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

//       1) spelling smallest wrong and mismatch for function name in calling
//       2) logic was off
// I notice return value was not the lowest number so the logic was of
// I ran debugger and it seems to be the conditions inside the  the if and else statements
// a>b>c seems ok as c is the smallest for that case. but it's not, as a>b will make the statement return false
// I used && to divide  a<c? and b<c? to make sure it will be current and checks if c is the smallest
// This is good for the numbers i had but what happens if i mix them up
// oh no I got a bad result!
// c I not the smallest so no need checking for it, the else if is still checking stuff that are not relevant
// a > c > is again illogical replacing it with a<b will give the right result, how ever

function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  } else if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(100, 66, 103));
