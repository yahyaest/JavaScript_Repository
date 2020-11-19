let array = [15, 9, 21, 124, 69, 5, 8, 21, 45, 78, 215, 58, 321, 78, 34, 7];

// Main
console.log("Before Sort : ", array);
//bubbleSort(array);
//insertionSort(array);
//selectionSort(array);
//mergeSort(array);
quickSort(array, 0, array.length - 1);
console.log("After Sort : ", array);

// Bubble Sort Algorithm
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
  }
}

// Insertion Sort Algorithm
function insertionSort(array) {
  let i = 0;
  while (i < array.length) {
    i++;
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(j, j - 1, array);
      }
    }
    console.log(i, array);
  }
}

// Selection Sort Algorithm
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let min_index = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] <= min) {
        min = array[j];
        min_index = j;
      }
    }
    swap(i, min_index, array);
  }
}

// Merge Sort Algorithm
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let n = Math.floor(array.length / 2);
  let left = array.slice(0, n);
  let right = array.slice(n);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Quick Sort Algorithm
function quickSort(array, low, high) {
  if (low < high) {
    p = partition(array, low, high);
    quickSort(array, low, p - 1);
    quickSort(array, p + 1, high);
  }
}

function partition(array, low, high) {
  let pivot = array[high];
  let j = low - 1;

  for (let i = low; i <= high - 1; i++) {
    if (array[i] <= pivot) {
      j++;
      swap(j, i, array);
    }
  }
  swap(j + 1, high, array);
  return j + 1;
}

function swap(x, y, array) {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}
