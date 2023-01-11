const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {

  let string = arr.join("").toLowerCase();
  string = string.replace(/\s/g, "");
  const newArr = string.split('');
  const distinctLetters = newArr.filter((element, index)=>index==newArr.indexOf(element) ? true : false)
    
  const obj={};
  for(let i=0 ;i < distinctLetters.length ; i++ ){
    obj[distinctLetters[i]] = 1;
  }
  
  for(let i =0 ; i < newArr.length ; i++){
    if(i !== newArr.indexOf(newArr[i])){
        obj[newArr[i]]++;
    }
  }
  
  console.log(obj);
  return Object.keys(obj).reduce((acc, curr)=>obj[acc] > obj[curr] ? acc : curr);

};

console.log(countLetters(array));
