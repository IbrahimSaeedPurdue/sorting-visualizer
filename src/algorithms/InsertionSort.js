const insertionSort = (colArray) => {
  let animations = [];
  for (let i = 1; i < colArray.length; i++) {
    let val = colArray[i];
    let j = i - 1;
    while (j >= 0 && colArray[j] > val) {
      animations.push({
        cols: [j, j + 1],
        val: val,
        finalSwap: false
      });
      colArray[j + 1] = colArray[j];
      j--;
    }
    animations.push({
      cols: [j + 1],
      val: val,
      finalSwap: true
    });

    colArray[j + 1] = val;
  }
  return animations;
};

export default insertionSort;