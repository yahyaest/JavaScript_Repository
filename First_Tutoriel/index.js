function setFlex() {
  let flex = document.createElement("div");
  flex.setAttribute("class", "flex_box");
  flex.setAttribute("id", "result_box");
  document.body.appendChild(flex);

  let flex_text = document.createElement("div");
  flex_text.setAttribute("id", "text_container");
  flex.appendChild(flex_text);

  let flex_image = document.createElement("div");
  flex_image.setAttribute("id", "image_container");
  flex.appendChild(flex_image);
}

function setText() {
  let result = calculateResult();
  let p = document.createElement("p");
  p.setAttribute("id", "TEXT");
  p.innerText = result;
  let div = document.getElementById("text_container");
  div.appendChild(p);
  //document.getElementById("demo").innerHTML = result;
}

function setImage() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "./Images/inflation-impact.png");
  x.setAttribute("width", "30%");
  //x.setAttribute("height", "533");
  x.setAttribute("alt", "Inflation Impact");
  x.setAttribute("id", "RAT");

  div = document.getElementById("image_container");
  div.appendChild(x);
}
function deleteFlex() {
  // let x = document.getElementById("RAT");
  // let y = document.getElementById("text_container");
  let z = document.getElementById("result_box");

  //document.body.appendChild(x);
  //x.parentNode.removeChild(x);
  //x.remove();
  //y.remove();

  while (z != null) {
    z.remove();
    z = document.getElementById("result_box");
  }
}

function setInputs() {
  let intialSaving = document.getElementById("init").value;
  let mounthlySaving = document.getElementById("mounth").value;
  let yearsNubmer = document.getElementById("years").value;

  console.log(intialSaving, mounthlySaving, yearsNubmer);

  return [intialSaving, mounthlySaving, yearsNubmer];
}

function calculateResult() {
  intialSaving = Number(setInputs()[0]);
  mounthlySaving = Number(setInputs()[1]);
  yearsNubmer = Number(setInputs()[2]);
  //console.log(intialSaving, mounthlySaving, yearsNubmer);
  let annuelInflationRate = 0.07;
  let actuelSaving = intialSaving;
  let savingRealWorth = 0;
  let inflatinSum = 0;

  for (let index = 0; index < yearsNubmer; index++) {
    inflatinSum = Math.trunc(inflatinSum + actuelSaving * annuelInflationRate);
    actuelSaving = actuelSaving + mounthlySaving * 12;
    savingRealWorth = actuelSaving - inflatinSum;
    console.log(actuelSaving, inflatinSum, savingRealWorth);
  }

  console.log(intialSaving);

  // document.write(
  //   "After " +
  //     yearsNubmer +
  //     " years you will have " +
  //     actuelSaving +
  //     " which value today as " +
  //     savingRealWorth +
  //     " and lost value is " +
  //     inflatinSum
  // );

  let result =
    "After " +
    yearsNubmer +
    " years you will have " +
    actuelSaving +
    " which value today as " +
    savingRealWorth +
    " and lost value is " +
    inflatinSum;

  return result;
}

function PrintResult() {
  let z = document.getElementById("result_box");
  if (z != null) {
    deleteFlex();
  }
  setFlex();
  setText();
  setImage();
}
