const getStringsLengths = (arrayOfString) => {
  let lengthsArray = [];
  arrayOfString.forEach((string) => {
    lengthsArray.push(string.length);
  });
  return lengthsArray;
};

