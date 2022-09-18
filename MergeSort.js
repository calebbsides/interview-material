// Time: O(logn)
// Space: O(n)

function mergeSort(arr) {
  const middle = arr.length / 2;

  // arr is empty or only 1 element
  if (arr.length < 2) {
    return arr;
  }

  // split the array(in place) at the middle
  const arr1 = arr.splice(0, middle);

  // merge split and remaining elements
  return mergeArrays(mergeSort(arr1), mergeSort(arr));
}

function mergeArrays(arr1, arr2) {
  const sorted = [];

  // neither array is empty
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      //modify array in place using shift
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  // copy over any untouched elements
  return [...sorted, ...arr1, ...arr2];
}

const arr = [4, 2, 9, 3, 5];

console.log(mergeSort(arr));
