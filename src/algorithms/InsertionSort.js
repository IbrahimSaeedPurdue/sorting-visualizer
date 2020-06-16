const insertionSort = (colArray) => {
  for (let i = colArray.length - 1; i > 0; i--) {
    let currentVal = colArray[i];
    console.log(currentVal);
    for (let j = 0; j >= 0; j++) {
      if (colArray[j] > currentVal) {
        colArray[j + 1] = colArray[j];
      } 
    }

  }

 
  

};

export default insertionSort;