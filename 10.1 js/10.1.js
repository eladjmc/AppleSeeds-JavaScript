// part 1
const isString = (stringMaybe, print) => {
    typeof stringMaybe === 'string' && print(stringMaybe);  
}
const string = "I hope it's true";
isString(string, (str)=>{console.log(str);});

//part 2 & 3
const firstWordUpperCase = (string , dashMySentence) => {
    let firstWord=string.split(' ')[0].toUpperCase();
    const str = string.replace(string.split(' ')[0], firstWord);
    return dashMySentence(str);
}

console.log(firstWordUpperCase("bla bla ding dong", (sentence) => {
    return sentence.replace(/ /g, "-");
})
); 


//part 4
const calcTwoNumbers = (num1,num2,operator) => operator(num1,num2);

console.log(calcTwoNumbers(10,5,(n1,n2)=> n1 != 0 ? n1/n2 : NaN));