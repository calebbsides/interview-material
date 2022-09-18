// O(logn)

function binarySearchIter(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

function binarySearchRec(arr, target) {
  return helper(arr, target, 0, arr.length - 1);
}

function helper(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((right + left) / 2);

  if (arr[middle] === target) {
    return middle;
  }

  if (arr[middle] > target) {
    return helper(arr, target, left, middle - 1);
  } else {
    return helper(arr, target, middle + 1, right);
  }
}

const arr = [1, 2, 2, 3, 4, 5];

console.log(binarySearchIter(arr, 4));
