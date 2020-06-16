const bubbleSort = (colArray) => {
  let animations = [];
  let isSorted = true;
  for (let h = colArray.length; h > 0; h--) {
    for (let i = 0; i < h - 1; i++) {
      let animation = {
        cols: [i, i + 1],
        swap: false
      };

      if (colArray[i] > colArray[i + 1]) {
        let temp = colArray[i + 1];
        colArray[i + 1] = colArray[i];
        colArray[i] = temp;

        animation.swap = true;
        isSorted = false;
      }
      animations.push(animation);
    }
    if (isSorted) break;
  }

  return animations;
};

// let animations = [];
//   while (true) {
//     let isSorted = true;

//     for (let i = 0; i < colArray.length - 1; i++) {
//       let animation = {
//         cols: [i, i + 1],
//         swap: false
//        }; 

//       if (colArray[i] > colArray[i + 1]) {
//         let temp = colArray[i + 1];
//         colArray[i + 1] = colArray[i];
//         colArray[i] = temp;

//         animation.swap = true;
//         isSorted = false;
//       }
//       animations.push(animation);
//     }
//     if (isSorted) break;
//   }

//   return animations;

export default bubbleSort;

