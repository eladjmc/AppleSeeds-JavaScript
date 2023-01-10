const someObject = { lorem: "ipsum" };
let arr = new Array(100);
arr.fill(someObject, 0);

let arr2 = Array.from({ length: 100 }, (value, index) => index + 1);

console.log(arr2);

let arrValues = Array.from(
  arr.map((obj) => {
    return Object.values(obj);
  })
); // this is 6 ans
arrValues = Array.from(Object.values(arrValues));
arrPointer =arrValues //changing arrPointer will change arrValue

console.log(arrValues);
console.log(arr);

// arr11=[1,2,3,4,5]
// let newarr= arr11.reduce((obj, item,index) => {
//   return {
//     obj, key : item,
//   };
// },{});

// console.log(newarr);
 