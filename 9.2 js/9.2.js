
  const getStringLengthWhile = (arrayOfStrings)=>{
    let lengthsArray = [];
    console.log(arrayOfStrings);
    while(arrayOfStrings.length != 0){
        lengthsArray.push(arrayOfStrings[arrayOfStrings.length-1].length);
        arrayOfStrings.pop();
    }
    return lengthsArray;
  }

  console.log(getStringLengthWhile(["asdsada","sd", "fds"]));