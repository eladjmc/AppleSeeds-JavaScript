// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.

// Block 1

// 5
// it will return the function but will set bto 5 before-hand
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);


// Block 2

//  1

// global scope inside function will not change my variable value
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

// Block 3
//3
//3
//3
// it will wait 0.1 sec to call the function but will first call it 3 time
// it will only do inside logic when the i already at max value(3) and therefore it will print 3, 3 times
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
