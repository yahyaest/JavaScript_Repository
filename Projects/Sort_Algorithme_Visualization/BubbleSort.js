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

  bubbleSort(values);
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
    } else if (states[i] === 2) {
      fill(0, 255, 0);
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        states[j] = 0;
        rect(j * w, height - array[j], w, array[j]);

        states[j + 1] = 1;
        rect(j + 1 * w, height - array[j + 1], w, array[j + 1]);

        await swap(array, j, j + 1);
        for (let i = 0; i < states.length; i++) {
          states[i] = -1;
        }
        let current = array.length - i;
        states[array.length - i] = 2;
        for (let i = current; i < states.length; i++) {
          states[i] = 2;
        }
      }
    }
  }
  for (let i = 0; i < states.length; i++) {
    states[i] = 2;
  }
}

async function swap(arr, a, b) {
  await sleep(10);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
