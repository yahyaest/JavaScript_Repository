let values = [];
let states = [];
let w = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width / w));

  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }

  selectionSort(values);
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
    } else if (states[i] === 2) {
      fill(0, 255, 0);
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function selectionSort(array) {
  let current = 0;

  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let min_index = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] <= min) {
        min = array[j];
        min_index = j;
      }
    }

    states[i] = 0;
    rect(i * w, height - array[i], w, array[i]);

    states[min_index] = 1;
    rect(min_index * w, height - array[i], w, array[i]);

    await swap(array, i, min_index);
    for (let i = 0; i < states.length; i++) {
      states[i] = -1;
    }

    current++;
    for (let i = 0; i < current; i++) {
      states[i] = 2;
    }
  }
}

async function swap(arr, a, b) {
  await sleep(250);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
