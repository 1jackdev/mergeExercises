function merge(arr1, arr2) {
  const newArr = [];
  let a = 0;
  let b = 0;
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      newArr.push(arr1[a]);
      a++;
    } else {
      newArr.push(arr2[b]);
      b++;
    }
  }
  while (a < arr1.length) {
    newArr.push(arr1[a]);
    a++;
  }
  while (b < arr2.length) {
    newArr.push(arr2[b]);
    b++;
  }
  return newArr;
}

function mergeSort(arr) {
    // if my arr is ready to be sorted,
    // return it to be merged
    if (arr.length <= 1){
        return arr
    }
    const middle = Math.floor(arr.length / 2)
    const leftArr = mergeSort(arr.slice(0, middle))
    const rightArr = mergeSort(arr.slice(middle))
    return merge(leftArr, rightArr)
}

module.exports = { merge, mergeSort };
