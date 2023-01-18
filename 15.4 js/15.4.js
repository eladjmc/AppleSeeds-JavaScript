// What is wrong with this code?
//   1. First find the line that contains the problem. Write it down.
//   2. Which debug method did you use to find the bug?
//   3. Explain the bug in your own words.
//   4. Fix the code and submit it all.

// 1) compiling it will return Nan
// running with a debugger showed me that sum was started as undefined and there for adding
// it a number made it into a Nan.
// so I set sum to 0 at the first line of the function
// 2) function return a value 2 big to be the average, not what I was expecting
// So I ran some 'deep' calculation and realize that average is sum/amount-of-elements
// I went on and divided the result of some by the length of the arr


function calcAverage (arr){
var sum = 0;
for ( var i = 0 ; i < arr .length; i ++ ){
sum += arr [ i ];
} return sum/arr.length ;
}
console.log(calcAverage ([ 85 , 90 , 92 ]));