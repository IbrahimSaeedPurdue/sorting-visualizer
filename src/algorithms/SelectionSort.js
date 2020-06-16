const selectionSort = (colArray) => {
  let animations = [];
  for (let i = 0; i < colArray.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < colArray.length; j++) {
      if (colArray[j] < colArray[min]) {
        min = j;
      }

      animations.push({
        cols: [i, j],
        swap: false
      });
    }
    animations.push({
      cols: [i, min],
      swap: true
    });
    let temp = colArray[min];
    colArray[min] = colArray[i]
    colArray[i] = temp;
  }
  
  return animations;
};


export default selectionSort;