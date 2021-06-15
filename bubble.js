function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    // loop j until arr.length - i
    // means that after the first loop of i,
    // we have found the biggest num,
    // and no longer need to compare it
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    // if we didn't swap any characters,
    // our array is sorted
    if (!swapped) return arr;
  }
  return arr;
}

module.exports = bubbleSort;
