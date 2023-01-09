const isLeapYear = (year) => {
    if(!(year % 400)){
        return true;
    }
    if (!(year % 4)){
        return  !(year % 100) ? false : true;
    }

}
console.log(isLeapYear(2400));