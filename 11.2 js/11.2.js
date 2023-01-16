const doubleValues = (intArr) => {
  const double = (num) => num * 2;
  return intArr.map((num) => double(num));
};
console.log(doubleValues([5, 15, 25, 35]));

const evenNumbers = (intArr) => {
  const newArr = [];
  intArr.forEach((number) => {
    if (!(number % 2)) {
      newArr.push(number);
    }
  });
  return newArr;
};
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const showFirstAndLast = (fullArr) => [
  fullArr[0].toString(),
  fullArr[fullArr.length - 1].toString(),
];
console.log(showFirstAndLast([1, 2, 3, 4, 5, 6, 7]));

const vowelCount = (str) => {
  const dictOfVowel = { a: true, e: true, i: true, o: true, u: true };
  const vowelCounterObj = {};
  const arrOfStr = str.toLowerCase().split("");
  arrOfStr.forEach((char) => {
    if(vowelCounterObj[char] > 0){
        vowelCounterObj[char] ++;
    }
    if (dictOfVowel[char]) {
      if (!vowelCounterObj[char]) {
        vowelCounterObj[char] = 1;
      }  
    }
  });
  return vowelCounterObj;
};
console.log(vowelCount("oeEeeeeaaaaaaiijfhdsy"));


const capitalize = (str) => {
    let returnStr =''
    str.split('').forEach(char => {
        returnStr += char.toUpperCase();
    });
    return returnStr;
}
console.log(capitalize('elad loves to study'));

const shiftLetters = (str) => {
    let newStr=''
    let charcod = 0;
    str.split('').forEach(char => {
        if(char != ' '){
            charcode = (char.charCodeAt()) - 1;
            newStr+=String.fromCharCode(charcode);
        }else {
            newStr+=char
        }
    });
    return newStr;
}

console.log(shiftLetters('abcde'));


const swapCase = (str) => str.split(' ').map((word,index) =>{
    if((index %2)){
        return word.toUpperCase();
    }
    return word;
}).join(' ');
console.log(swapCase('zebra crossing kind of text words'));

 
