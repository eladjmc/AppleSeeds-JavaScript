// Instructions
// You have this array:
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// Use slice create a new array that will remove all the
// elements from the array except “Orange” and “Lemon”

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let fruitsV2 = fruits.slice(1,3);

console.log(fruitsV2); // [ 'Orange', 'Lemon' ]