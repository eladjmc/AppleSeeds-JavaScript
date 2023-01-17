const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.sort());
console.log(foods.sort().reverse());

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

// b. Let's sort an array of words that includes a word with an uppercas
//  option 1
console.log(foodsWithUpperCase.sort((a,b) => a.toLowerCase()[0].charCodeAt() - b.toLowerCase()[0].charCodeAt()));
//  option 2
console.log(foodsWithUpperCase.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));


//  option 1
console.log(foodsWithUpperCase.sort((a,b) => b.toLowerCase()[0].charCodeAt() - a.toLowerCase()[0].charCodeAt()));
//  option 2
console.log(foodsWithUpperCase.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase())));



const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

console.log(words.sort((a,b)=> a.length > b.length ? -1 : b.length === a.length ? 0 : 1));
console.log(words.sort((b,a)=> a.length > b.length ? -1 : b.length === a.length ? 0 : 1));