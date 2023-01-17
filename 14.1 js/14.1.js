// Write the following functions using the reduce built-in function.
// 1. max
// 2. the sum of even numbers
// 3. average

const max = (array) => array.reduce((acc,cur) => acc > cur ? acc : cur,array[0]);
console.log(max([1,3,25,5,6])); 

const sumOfEven = (array) => array.reduce((acc,cur) => cur % 2 ? acc : cur+acc, 0);
console.log(sumOfEven([1,3,2,5,6])); 

const average = (array) => array.reduce((acc,cur,i) => {
    if(i === (array.length-1)){
        return (acc+cur)/array.length;
    }
    return acc + cur;
},0);
console.log(average([2,4,6,8])); 

