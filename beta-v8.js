/**
 * Random
 */
function random() {
  return Math.floor(Math.random() * 100);
}

const randomNumber = random();

/**
 * Declare Variables
 */

// create empty array for numbers
const numberArray = [];
let number = 0;
let message = '';
let htmlTag = '';

/**
 * Click function
 */

const button = document.querySelector('.btn-ckeck');

button.addEventListener('click', () => {
  game();
});

function game() {
  testGame();
  //   testArray();
}

function testGame(number) {
  number = document.querySelector('#number').value;
  number = Number(number);
  if (number == 0) {
    alert(`Please enter a number! \n 1 ist the smalest number you can use.`);
  } else {
    if (number > 100) {
      alert(
        `100 ist the highest number you can use. \n You number was ${number}`
      );
    } else {
      /**
       * Number array
       */

      if (numberArray.length == []) {
        console.log('The array is empty');
        console.log(numberArray);
        numberArray.push(number);
        console.log(numberArray);
      } else {
        if (numberArray.includes(number)) {
          alert(`already in`);
          console.log(numberArray);
        } else {
          numberArray.push(number);
          console.log(numberArray);
        }
      }
    }
  }
}
