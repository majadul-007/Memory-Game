// Variable Declaration

const allCard = document.querySelectorAll(".card");
const score = document.querySelector(".score-panel");
const restart = document.querySelector(".restart");
let movesTxt = document.querySelector(".moves-txt");
let movesCount = document.querySelector(".movesCount");
let moves = 0;
let isMatched = false;
let firstClick, secondClick;
let currentIndex = 1;

// Evnet Listener

document.addEventListener("DOMContentLoaded", startGame);

// Restart Button Works

restart.addEventListener("click", restartGame);

// Strating the Game

function startGame() {
  for (let i = 0; i < allCard.length; i++) {
    allCard[i].addEventListener("click", flipOver);
  }
  restartGame();
}

// Counting Number Of Moves

function numberOfMoves() {
  moves++;
  movesCount.innerHTML = moves;
  if (moves === 1) {
    movesTxt.textContent = " Move";
  } else {
    movesTxt.textContent = " Moves";
  }
}

// Restart game Function

function restartGame() {
  console.log("reseting game");

  // Reseting the number of moves

  moves = 0;
  movesCount.innerHTML = 0;

  // For loop

  for (let i = 0; i < allCard.length; i++) {
    allCard[i].classList.remove("open", "match", "notMatch");
    allCard[i].addEventListener("click", flipOver);
    allCard[i].addEventListener("click", numberOfMoves);
  }
}

// Toggle the card

function cardOpen() {
  firstClick.classList.toggle("open");
  secondClick.classList.toggle("open");
  firstClick.classList.remove("notMatch");
  secondClick.classList.remove("notMatch");
  isMatched = false;
}

// Disble listener after Matched

function removeListener() {
  firstClick.removeEventListener("click", flipOver);
  secondClick.removeEventListener("click", flipOver);
}

// Flip the card

function flipOver(e) {
  if (!isMatched) {
    let data = e.currentTarget;
    // let data = this
    e.target.classList.toggle("open");
    if (currentIndex == 1) {
      firstClick = data;
      currentIndex = 2;
    } else if (currentIndex == 2) {
      secondClick = data;
      let firstClickCard = firstClick.getElementsByTagName("i")[0].className;
      let secondClickCard = secondClick.getElementsByTagName("i")[0].className;

      if (firstClickCard === secondClickCard) {
        console.log("matched");
        firstClick.classList.add("match");
        secondClick.classList.add("match");
        removeListener();
      } else {
        isMatched = true;
        console.log("Did't match");
        setTimeout(function() {
          firstClick.classList.add("notMatch");
          secondClick.classList.add("notMatch");
        }, 1200);
        setTimeout(cardOpen, 1700);
      }
      currentIndex = 1;
    }
  }
}


