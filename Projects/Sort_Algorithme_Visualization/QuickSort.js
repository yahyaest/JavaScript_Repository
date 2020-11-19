let values = [];
let states = [];
let w = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  quickSort(values, 0, values.length - 1);
  console.log(values);
}

function draw() {
  background(0);

  for (let i = 0; i < values.length; i = i + 1) {
    stroke(40, 100, 100);
    fill(200);
    if (states[i] === 0) {
      fill(255, 0, 0);
    } else if (states[i] === 1) {
      fill(0, 0, 255);
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function quickSort(array, low, high) {
  if (low < high) {
    p = await partition(array, low, high);
    states[high] = -1;

    await Promise.all([
      quickSort(array, low, p - 1), // await quicksort() for each part individually
      quickSort(array, p + 1, high), // await quicksort() for each part individually
    ]);
  }
}

async function partition(array, low, high) {
  for (let i = low; i < high; i++) {
    states[i] = 1;
  }

  let pivot = array[high];
  let j = low - 1;
  states[high] = 0;
  for (let i = low; i <= high - 1; i++) {
    if (array[i] <= pivot) {
      states[high] = 0;
      j++;

      await swap(array, j, i);
      states[high] = -1;
    }
  }
  await swap(array, j + 1, high);

  for (let i = low; i < high; i++) {
    if (i != high) {
      states[i] = -1;
    }
  }

  return j + 1;
}

async function swap(arr, a, b) {
  await sleep(100);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
