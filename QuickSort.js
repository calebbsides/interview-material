// Time: O(nlogn) average and O(n^2) worst case
function quickSort(arr) {
  quickSortRec(arr, 0, arr.length - 1);

  return arr;
}

function quickSortRec(arr, left, right) {
  if (left >= right) {
    return;
  }

  const pivot = arr[Math.floor((left + right) / 2)];
  const index = partition(arr, left, right, pivot);
  quickSortRec(arr, left, index - 1);
  quickSortRec(arr, index, right);
}

function partition(arr, left, right, pivot) {
  while (left <= right) {
    // while left index is in place
    while (arr[left] < pivot) {
      left++;
    }

    // while right index is in place
    while (arr[right] > pivot) {
      right--;
    }

    // if not sorted swap
    if (left < right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  // return index of pivot
  return left;
}

function swap(arr, p1, p2) {
  const tmp = arr[p1];
  arr[p1] = arr[p2];
  arr[p2] = tmp;
}

const arr = [4, 2, 9, 3, 5];

console.log(quickSort(arr));
