// (function () {

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

// console.log(number);
// });

button.addEventListener('click', () => {
  //    button.textContent = `Click count: ${event.detail}`;
  // console.log(`Click count: ${event.detail}`);
  game();

  // return number;
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
      // testArray();
    //   return number;

     /**
   * Number array
   */

      if(numberArray.length == []) {

          console.log('The array is empty');
          console.log(numberArray);
          numberArray.push(number);
          console.log(numberArray);
      } else {
        if (numberArray.includes(number)){
            alert(`already in`);
            console.log(numberArray);
        } else {
            numberArray.push(number);
            console.log(numberArray);
        }
      }
    }
  }
  // return number;
  
}

// function testArray() {
//   // testNumber();
//   console.log(testNumber(number));
//   console.log(numberArray);
//   if (numberArray.length == []) {
//     numberArray.push(testNumber(number));
//     console.log(numberArray);
//     testNumber(number);
//   } else {
//     for (let i = 0; i < numberArray.length; i++) {
//       if (testNumber(number) === numberArray[i]) {
//         // numberArray.push(number);
//         // alert(`already in`);
//         console.log(numberArray);
//         testNumber();
//         // number = document.querySelector('#number').value;
//         // return false;
//         // button.addEventListener('click', () => {
//         // testNumber();
//         // })
//         // game();
//       }
//     }
//     // else if(number != numberArray){
//     //     numberArray.push(number);
//     //     console.log(numberArray);
//     //     return true;
//     // } else {
//     //     console.log(numberArray);
//     //     return numberArray;
//     //     // return false;
//     // }
//   }

//   // if(numberArray === [])
//   // numberArray.push(number);
//   // console.log(numberArray);
//   // if (numberArray > 1 && number == numberArray) {
//   //     alert(`already in`);
//   // }
// }
