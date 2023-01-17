// Write the following functions using the reduce built-in function.

// 1. Write a function called extractOnlyValue which accepts an
// array of objects and a key and returns a new array with
// the value of each object at the key
const arr = [
  {
    lol: 1,
  },
  {
    lol: 7,
  },
  {
    lol: 11,
  },
  {
    lol: 89,
  },
];
const extractOnlyValue = (array, key) =>
  array.reduce((acc, cur) => {
    acc.push(cur[key]);
    return acc;
  }, []);
console.log(extractOnlyValue(arr, "lol"));

// 2. Write a function called countOnlyVowels which accepts a
// string and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in
// the string. This function should be case insensitive so a
// lowercase and uppercase letter should count
const countOnlyVowels = (str) => {
  const dict = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  const arr = str.toLowerCase().split("");
  return arr.reduce((acc, cur) => {
    if (dict[cur]) {
      if (!acc[cur]) {
        acc[cur] = 1;
      }
      else{
        acc[cur]++;
      }
    }
    return acc;
  }, {});
};

console.log(countOnlyVowels("efefeuluaaa"));

// 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function

const addKeyAndValue = (arrOfObj,key,value) => {
    return arrOfObj.reduce((acc,cur)=>{
        cur[key]=value;
        acc.push(cur);
        return acc;
    },[])
}

console.log(addKeyAndValue(arr,'lol2',8))