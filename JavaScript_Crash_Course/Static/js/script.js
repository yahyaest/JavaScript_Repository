// Challenge 1: Your Age in Days

function ageInDays() {
  let birthYear = prompt("What year were you born Asshole ?");
  let ageInDayss = (2020 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "You are " + ageInDayss + " days old."
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
  //console.log(ageInDayss);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2: Cat Generator
function generateCat() {
  let image = document.createElement("img");
  let div = document.getElementById("flex-cat-gen");
  image.src =
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissor
let rpsResult = { wins: 0, losses: 0, draws: 0 };

function rpsGame(yourChoice) {
  // console.log(yourChoice);
  //console.log(yourChoice.src);
  console.log(yourChoice.id);

  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  let RPS = ["rock", "paper", "scissor"];

  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = RPS.random();
  console.log(botChoice);

  let result = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
  console.log(result);

  let message = finalMessage(result); // {'message': 'You won!', 'color': 'green'}
  console.log(message);

  rpsFrontEnd(humanChoice, botChoice, message);

  function decideWinner(humanChoice, botChoice) {
    if (humanChoice === botChoice) {
      return [0.5, 0.5];
    } else if (humanChoice === "rock" && botChoice === "scissor") {
      return [1, 0];
    } else if (humanChoice === "paper" && botChoice === "rock") {
      return [1, 0];
    } else if (humanChoice === "scissor" && botChoice === "paper") {
      return [1, 0];
    } else {
      return [0, 1];
    }
  }

  function finalMessage(result) {
    if (JSON.stringify(result) === JSON.stringify([0.5, 0.5])) {
      rpsResult["draws"]++;
      return { message: "Draw!", color: "yellow" };
    } else if (JSON.stringify(result) === JSON.stringify([1, 0])) {
      rpsResult["wins"]++;
      return { message: "You won!", color: "green" };
    } else {
      rpsResult["losses"]++;
      return { message: "You lost!", color: "red" };
    }
  }

  function rpsFrontEnd(humanChoice, botChoice, message) {
    let flex = document.getElementById("flex-box-rps-div");
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissor = document.getElementById("scissor");

    let humanDiv = document.createElement("div");
    let humanImage = document.createElement("img");
    humanImage.setAttribute("id", humanChoice);
    console.log("this is it", humanChoice);
    humanImage.src = document.getElementById(humanChoice).src;
    humanImage.setAttribute("height", 150);
    humanImage.setAttribute("width", 150);
    humanImage.style.boxShadow = "0px 10px 50px rgba(201, 189, 18, 0.7)";
    humanDiv.append(humanImage);

    let botDiv = document.createElement("div");
    let botImage = document.createElement("img");
    botImage.setAttribute("id", botChoice);
    botImage.src = document.getElementById(botChoice).src;
    botImage.setAttribute("height", 150);
    botImage.setAttribute("width", 150);
    botImage.style.boxShadow = "0px 10px 50px rgba(231, 133, 41, 0.7)";
    botDiv.appendChild(botImage);

    let answerDiv = document.createElement("div");
    let answer = document.createElement("h1");
    let textAnswer = document.createTextNode(message.message);
    answer.appendChild(textAnswer);
    answer.style.color = message.color;
    answer.style.fontSize = "60px";
    answer.style.padding = "30px";
    answerDiv.appendChild(answer);

    rock.remove();
    paper.remove();
    scissor.remove();

    flex.appendChild(humanDiv);
    flex.appendChild(answerDiv);
    flex.appendChild(botDiv);

    document.getElementById("rps-wins").textContent = rpsResult["wins"];
    document.getElementById("rps-losses").textContent = rpsResult["losses"];
    document.getElementById("rps-draws").textContent = rpsResult["draws"];
  }
}

function rpsReset() {
  // let container = document.getElementsByClassName("container-3");
  let container = document.getElementById("aaa");
  console.log(container);
  let flex = document.getElementById("flex-box-rps-div");

  let rock = document.createElement("img");
  rock.src = "./Static/images/rock.png";
  rock.id = "rock";

  rock.width = 150;
  rock.height = 150;
  let paper = document.createElement("img");
  paper.src = "./Static/images/paper.png";
  paper.id = "paper";

  paper.width = 150;
  paper.height = 150;
  let scissor = document.createElement("img");
  scissor.src = "./Static/images/scissor.jpg";
  scissor.id = "scissor";

  scissor.width = 150;
  scissor.height = 150;

  flex.remove();
  let new_flex = document.createElement("div");
  new_flex.id = "flex-box-rps-div";
  new_flex.className = "flex-box-rps";
  new_flex.style.display = "flex";
  new_flex.style.border = "1px solid black";
  new_flex.style.padding = "10px";
  new_flex.style.flexWrap = "wrap";
  new_flex.style.flexDirection = "row";
  new_flex.style.justifyContent = "space-around";
  let style = document.createElement("style");
  style.innerHTML = `
 .flex-box-rps img:hover {
  box-shadow: 0px 10px 50px rgba(45, 78, 228, 0.7);
}`;
  new_flex.appendChild(style);

  container.insertBefore(new_flex, container.children[1]);
  new_flex.appendChild(rock);
  new_flex.appendChild(paper);
  new_flex.appendChild(scissor);

  // rock.onclick(this) = rpsGame(rock);
  rock.addEventListener(
    "click",
    function (e) {
      rpsGame(rock)("clicked");
    },
    false
  );
  //paper.onclick(rpsGame(this));
  paper.addEventListener(
    "click",
    function (e) {
      rpsGame(paper)("clicked");
    },
    false
  );
  //scissor.onclick(rpsGame(this));
  scissor.addEventListener(
    "click",
    function (e) {
      rpsGame(scissor)("clicked");
    },
    false
  );
}

//Challenge 4: Change the color of all buttons!
let buttonList = document.getElementsByTagName("button");
let buttonArray = [];
for (let i = 0; i < buttonList.length; i++) {
  buttonArray.push(buttonList[i].className);
}

function buttonColorChange(choice) {
  console.log(choice.value);

  if (choice.value === "Random") {
    randomOption();
  } else if (choice.value === "Red") {
    redOption();
  } else if (choice.value === "Green") {
    greenOption();
  } else {
    resetOption();
  }

  function randomOption() {
    Array.prototype.random = function () {
      return this[Math.floor(Math.random() * this.length)];
    };

    let randomList = [
      "btn btn-primary",
      "btn btn-danger",
      "btn btn-warning",
      "btn btn-success",
      "btn btn-info",
    ];

    for (let i = 0; i < buttonList.length; i++) {
      let randomChoice = randomList.random();
      buttonList[i].removeAttribute("class");
      buttonList[i].setAttribute("class", randomChoice);
    }
  }

  function redOption() {
    for (let i = 0; i < buttonList.length; i++) {
      buttonList[i].removeAttribute("class");
      buttonList[i].setAttribute("class", "btn btn-danger");
    }
  }

  function greenOption() {
    for (let i = 0; i < buttonList.length; i++) {
      buttonList[i].removeAttribute("class");
      buttonList[i].setAttribute("class", "btn btn-success");
    }
  }

  function resetOption() {
    for (let i = 0; i < buttonList.length; i++) {
      buttonList[i].removeAttribute("class");
      buttonList[i].setAttribute("class", buttonArray[i]);
    }
  }
}

// Challenge 5: BlackJack
let blackjackGame = {
  you: {
    scoreSpan: "#your-blackjack-result",
    div: "#your-box",
    score: 0,
  },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],
  cardsMap: {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("Static/sounds/swish.m4a");
const winSound = new Audio("Static/sounds/cash.mp3");
const lossSound = new Audio("Static/sounds/aww.mp3");

document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", delearLogic);

document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = randomCard();
    //console.log(card);
    showCard(card, YOU);
    //showCard(card, DEALER);
    updateScore(card, YOU);
    showScore(YOU);
    //console.log(YOU["score"]);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delearLogic() {
  blackjackGame["isStand"] = true;
  if (blackjackGame["turnsOver"] === false) {
    while (DEALER["score"] < 16 && blackjackGame["isStand"] === true) {
      let card = randomCard();
      showCard(card, DEALER);
      updateScore(card, DEALER);
      showScore(DEALER);
      await sleep(1000);
    }

    blackjackGame["turnsOver"] = true;
    let winner = computeWinner();
    showResult(winner);
  }
}

function blackjackDeal() {
  if (blackjackGame["turnsOver"] === true) {
    blackjackGame["isStand"] = false;
    let yourImages = document
      .querySelector("#your-box")
      .querySelectorAll("img");
    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img");
    //console.log(yourImages);
    for (let i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }

    for (let i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU["score"] = 0;
    DEALER["score"] = 0;
    blackjackGame["isStand"] = false;

    document.querySelector(YOU["scoreSpan"]).textContent = 0;
    document.querySelector(YOU["scoreSpan"]).style.color = "white";
    document.querySelector(DEALER["scoreSpan"]).textContent = 0;
    document.querySelector(DEALER["scoreSpan"]).style.color = "white";
    document.querySelector("#blackjack-result").textContent = "Let's play";
    document.querySelector("#blackjack-result").style.color = "black";

    blackjackGame["turnsOver"] = false;
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame["cards"][randomIndex];
}

// compute winner and return who just won
// update the wins, losses and draws
function computeWinner() {
  let winner;

  // condition: higher score than dealer or when dealer busts but you're 21 or under
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackjackGame["losses"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }
  }

  // condition: when user bust but dealer doesn't
  else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  }

  // condition: when user and dealer bust
  else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }
  console.log("Winner is", winner);
  console.log(blackjackGame);
  return winner;
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `Static/images/blackjack_images/${card}.png`;
    //cardImage.setAttribute("height", 150);
    cardImage.style = 100;
    cardImage.height = 150;
    console.log(cardImage.src);
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    // If addindg 11 keeps me below 21, add 11.Otherwise, add 1.
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function showResult(winner) {
  let message, messageColor;

  if (blackjackGame["turnsOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      message = "You won!";
      messageColor = "green";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["losses"];
      message = "You lost!";
      messageColor = "red";
      lossSound.play();
    } else {
      document.querySelector("#draws").textContent = blackjackGame["draws"];
      message = "You drew!";
      messageColor = "black";
    }
    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}

//Challenge 6: AJAX API's - Random User Generator

let url = "https://randomuser.me/api/?results=10";
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    let pepole = data.results;
    //console.log(pepole);
    for (let i = 0; i < pepole.length; i++) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let p = document.createElement("p");

      // ("${title(pepole[i].name.first)} ${title(pepole[i].name.last)}");
      let firstName = pepole[i].name.first;
      let lastName = pepole[i].name.last;
      p.appendChild(document.createTextNode(firstName + " " + lastName));

      img.src = pepole[i].picture.large;

      div.appendChild(img);
      div.appendChild(p);
      document
        .querySelector(".container-6 .flex-box-random-user-generator")
        .appendChild(div);
    }
  });

//let title = (str) => str[0].toUpperCase() + str.slice(1);
