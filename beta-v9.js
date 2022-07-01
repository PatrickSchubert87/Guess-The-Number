/**
 * Random
 */
function random() {
  return Math.floor(Math.random(1) * 100);
}

const randomNumber = random();

/**
 * Declare Variables
 */

// create empty array for numbers
let numberArray = [];
let number = 0;
let message = '';
let htmlTag = '';

/**
 * Game Over Function
 */

let gameOver = false;

// function gameOverFunction() {
//   if (numberArray.length < 10) {
//     alert('Congratulation, you won!');
//     gameOver = true;
//     restartBtn();
//   } else {
//     alert('Game Over, you lost!');
//     gameOver = true;
//     restartBtn();
//   }
// }

// function testGameOver() {
//   if (gameOver === false && numberArray.length < 10) {
//     //   checkNumber();
//     game();
//   } else {
//     gameOverFunction();
//   }
// }
/**
 * Click function
 */

// (function click() {
//     (function() {
        
        const button = document.querySelector('.btn-ckeck');
        
        button.addEventListener('click', () => {
          game();
        });
//     })();
// })();

/**
 * Game function
 */

function game() {
  testNumberValue();
  //   testGameOver();
  // checkNumber();
}

function testNumberValue() {
  number = document.querySelector('#number').value;
  number = Number(number);
  if (number == 0) {
    alert(`Please enter a number! \n 1 ist the lowest number you can use.`);
  } else {
    if (number > 100) {
      alert(
        `100 ist the highest number you can use. \n Your number was ${number}`
      );
    } else {
        array();
    }
    
    return number;
    // else {
      /**
       * Number array
       */

    //   if (numberArray.length == []) {
    //     console.log('The array is empty');
    //     console.log(numberArray);
    //     numberArray.push(number);
    //     console.log(numberArray);
    //   } else {
    //     if (numberArray.includes(number)) {
    //       alert(`The ${number} was already used \n Try another one`);
    //       console.log(numberArray);
    //     } else {
    //     //   numberArray.push(number);
    //     //   console.log(numberArray);
    //       //   testGameOver();
    //         checkNumber();
    //       //   return numberArray;
    //     }

      }
    }
//   }
//   checkNumber();
    // return number;
// }

function array() {
    // create empty array for numbers
// let numberArray = [];
    // number = number;
    // numberArray = numberArray;
    console.log(number, numberArray, numberArray.length);
    // alert(`Function array shows the number ${number} \n and the numberArray ${numberArray} and length ${numberArray.length}`);
    
    if (numberArray.length == []) {
        // console.log('The array is empty');
        // console.log(numberArray);
        numberArray.push(number);
        // console.log(numberArray);
        // game();
        checkNumber();
        return numberArray;
    } 
    else if (numberArray.includes(number)) {
            alert(`The ${number} was already used \n Try another one`);
            console.log(numberArray);
            // game();
            return numberArray;
            // return click();
        } 
        // else if (numberArray.length == []) {
        //         console.log('The array is empty');
        //         console.log(numberArray);
        //         numberArray.push(number);
        //         console.log(numberArray);
        //         // game();
        //         checkNumber();
        //         return numberArray = number;
        //     } 
            
            else {

                numberArray.push(number);

                /**
 * Game Over Function Lost
 */
                if (numberArray.length > 10) {
                    alert(`Game Over, you lost! \n The correct number was ${number}`);
    gameOver = true;
    restartBtn();
                }
              //   console.log(numberArray);
              //   testGameOver();
              checkNumber();
                return numberArray;
            }
        // }
        
        // alert(`Function array shows the number ${number} \n and the numberArray ${numberArray} and length ${numberArray.length}`);
    // }
    // return numberArray;
}
function checkNumber() {
    // number = testNumberValue(number);

    if (number === randomNumber) {
        console.log('Congratulations! This was the correct number');
        alert('Congratulation, you won!');
    gameOver = true;
    restartBtn();
        // gameOverFunction();
    } else {
        if(number < randomNumber) {
            // numberArray.push(number);
            // console.log(numberArray);
            message = 'The number is too low, please enter a new number';
            messageFuntion();
            console.log(`The number is too low, please enter a new number`);
        }
        if(number > randomNumber) {
            // numberArray.push(number);
            // console.log(numberArray);
            message = 'The number is too heigh, please enter a new number';
            messageFuntion();
            console.log(`The number is too heigh, please enter a new number`);
        }
    }
    return true;
  }

/**
 * Restart function and Restart Button
 */

function restart() {
  document.location.reload();
}

// Restart Button
function restartBtn() {
  const resetBtn = document.querySelector('.reset');
  resetBtn.style.display = 'block';
  resetBtn.addEventListener('click', () => {
    restart();
  });
}

/**
 * Message function
 */
function messageFuntion() {
    // numberArray = array(numberArray);
  const output = document.querySelector('.output');

  htmlTag = `
          <tr class="row">
          <td class="col numberIndex">#${numberArray.length}</td>
          <td class="col numberChecked">${number}</td>
          <td class="col message">${message}</td>
          </tr>`;

  output.insertAdjacentHTML('beforeend', htmlTag);
}
