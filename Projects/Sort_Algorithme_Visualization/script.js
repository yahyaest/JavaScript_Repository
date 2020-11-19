let values = [];
let i = 0;
let j = 0;
let fr = 100; //starting FPS
let x = 0; // use as counter
function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    //console.log(random(height));
    //values[i] = noise(i/100.0)*height;
  }
  // console.log('***************');
}

function draw() {
  background(0);

  //bubble_sort();
  insertionSort();
  // let x = random(255);
  let y = random(255);
  let z = random(255);
  for (let i = 0; i < values.length; i = i + 1) {
    stroke(40, 100, 100);
    strokeWeight(1);
    line(i, height, i, height - values[i]);
    frameRate(fr);

    //console.log('main', i);

    //if (i === 1 || i === 1000) {
    //  console.log(x, i, values);
    // }
    //x = x + 1;
  }
}

function bubble_sort() {
  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        stroke(150, 150, 50);
        strokeWeight(1);
        line(j, height, j, height - values[j]);
        stroke(255, 0, 0);
        strokeWeight(1);
        line(j + 1, height, j + 1, height - values[j + 1]);

        swap(values, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  //console.log('second', i);
  i++;
}

function insertionSort() {
  if (i < values.length) {
    for (let j = i - 1; j >= 0; j--) {
      if (values[j] < values[j - 1]) {
        stroke(150, 150, 50);
        strokeWeight(1);
        line(j, height, j, height - values[j]);
        stroke(255, 0, 0);
        strokeWeight(1);
        line(j - 1, height, j - 1, height - values[j - 1]);

        swap(values, j, j - 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;
}

function selectionSort() {
  if (i < values.length) {
    let min = values[i];
    let min_index = i;
    for (let j = i; j < values.length; j++) {
      if (values[j] <= min) {
        min = values[j];
        min_index = j;
      }
    }

    stroke(150, 150, 50);
    strokeWeight(1);
    line(i, height, i, height - values[i]);
    stroke(255, 0, 0);
    strokeWeight(1);
    line(min_index, height, min_index, height - values[i]);

    swap(values, i, min_index);
  } else {
    console.log("finished");
    noLoop();
  }
  i++;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
