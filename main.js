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

const button = document.querySelector('.btn-ckeck');

button.addEventListener('click', () => {
  game();
});

/**
 * Game function
 */

function game() {
  testNumberValue();
}

/**
 * Test Number Value
 */

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
  }
}

/**
 * Push and test numberArray
 * @returns numberArray
 */

function array() {
  console.log(number, numberArray, numberArray.length);

  if (numberArray.length == []) {
    numberArray.push(number);
    checkNumber();
    return numberArray;
  } else if (numberArray.includes(number)) {
    alert(`The number ${number} was already used \n Try another one`);
    console.log(numberArray);
    return numberArray;
  } else {
    numberArray.push(number);

    /**
     * Game Over = Lost
     */
    if (numberArray.length > 9) {
      alert(`Game Over, you lost! \n The correct number was ${randomNumber}`);
      gameOver = true;
      restartBtn();
    }
    checkNumber();
    return numberArray;
  }
}
function checkNumber() {
  /**
   * Test Game Over = Win
   */
  if (number === randomNumber) {
    
    alert(`Congratulation, you won! \n ${number} was the correct number`);
    gameOver = true;
    restartBtn();
  } else {
    // Check Number
    if (number < randomNumber) {
      message = 'The number is too low, please enter a new number';
      messageFuntion();
      console.log(`The number is too low, please enter a new number`);
    }
    if (number > randomNumber) {
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
 
  const output = document.querySelector('.output');

  htmlTag = `
          <tr class="row">
          <td class="col numberIndex">#${numberArray.length}</td>
          <td class="col numberChecked">${number}</td>
          <td class="col message">${message}</td>
          </tr>`;

  output.insertAdjacentHTML('beforeend', htmlTag);
}
