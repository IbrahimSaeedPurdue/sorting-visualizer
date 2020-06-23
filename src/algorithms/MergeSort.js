function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export default getMergeSortAnimations;

// const doMergeSort = (colArray) => {
//   let tempArr = new Array(colArray.length);
//   let animations = [];
//   mergeSort(colArray, tempArr, 0, colArray.length - 1, animations);
//   return animations;
// };

// const mergeSort = (colArray, tempArr, leftStart, rightEnd, animations) => {
//   if (leftStart >= rightEnd) {
//     return;
//   }

//   let mid = Math.floor((leftStart + rightEnd) / 2);
//   mergeSort(colArray, tempArr, leftStart, mid, animations);
//   mergeSort(colArray, tempArr, mid + 1, rightEnd, animations);
//   mergeHalves(colArray, tempArr, leftStart, rightEnd, animations);
// }

// const mergeHalves = (colArray, tempArr, leftStart, rightEnd, animations) => {
//   let rightStart = Math.floor((leftStart + rightEnd) / 2);
//   let leftEnd = rightStart - 1;

//   let leftIndex = leftStart;
//   let rightIndex = rightStart;
//   let tempIndex = leftStart;

  
//   while ((leftIndex <= leftEnd) && (rightIndex <= rightEnd)) {
//     animations.push({
//       cols: [leftIndex, rightIndex],
//       swap: false
//     });

//     if (tempArr[leftIndex] <= tempArr[rightIndex]) {
//       animations.push({
//         cols: [tempIndex, colArray[leftIndex]],
//         swap: true
//       });
//       colArray[tempIndex] = tempArr[leftIndex];
//       tempIndex++;
//       leftIndex++;
//     } else {
//       animations.push({
//         cols: [tempIndex, colArray[rightIndex]],
//         swap: true
//       });
//       colArray[tempIndex] = tempArr[rightIndex];
//       tempIndex++;
//       rightIndex++;
//     }
//     tempIndex++;
//   }

//   while (leftIndex <= leftEnd) {
//     animations.push({
//       cols: [leftIndex, leftIndex],
//       swap: false
//     });
//     tempArr[tempIndex] = colArray[leftIndex];
//     tempIndex++;
//     leftIndex++;
//     animations.push({
//       cols: [tempIndex, colArray[leftIndex]],
//       swap: true
//     });
//   }

//   while (rightIndex <= rightEnd) {
//     animations.push({
//       cols: [rightIndex, rightIndex],
//       swap: false
//     });
//     tempArr[tempIndex] = colArray[rightIndex];
//     tempIndex++;
//     rightIndex++;
//     animations.push({
//       cols: [tempIndex, colArray[rightIndex]],
//       swap: true
//     });
//   }


// };

// export default doMergeSort;