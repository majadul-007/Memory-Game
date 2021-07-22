function editor(){
  var tusar = "note";
  setTimeout(makeGrid, 3000);

}

const tusar = document.getElementById('hacking');

tusar.addEventListener('click', );

tusar.removeEventListener('click', noNeed);

const checkQuery = document.querySelector('.hack');





var note;

function hack(){
  var note = document.querySelector()

}


document.getElementById('note').addEventListener('click', makeGrid);

function makeGrid(e){
  e.preventDefault;
}


var firstClick, secondClick;
var counter = 1;
var wrong = false;
const card = document.querySelectorAll('.deck li ');

//for loop

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', flipOver);
}


function proceed() {
  firstClick.classList.toggle("open");
  secondClick.classList.toggle("open");
  wrong = false;
}

function flipOver(e) {
  if (!wrong) {
    let element = e.currentTarget;
    e.target.classList.toggle("open");
    if (counter == 1) {
      firstClick = element;
      counter = 2;
    } else if (counter == 2) {
      secondClick = element;
      var card1Type = firstClick.getElementsByTagName("i")[0].className;
      var card2Type = secondClick.getElementsByTagName("i")[0].className;
      if (card1Type == card2Type) {
        firstClick.removeEventListener("click", flipOver);
        secondClick.removeEventListener("click", flipOver);
      } else {
        wrong = true;
        setTimeout(proceed, 1000);
      }
      counter = 1;
    }
  }
}