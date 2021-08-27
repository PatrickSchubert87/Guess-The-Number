function random() {
  return Math.floor(Math.random() * 100);
}

const randomNumber = random();

/**
 * Game Over Function
 */

let gameOver = false;

function gameOverFunction() {
  alert('Game Over');
  gameOver = true;
  restartBtn();
}

/**
 * Check input field
 */

// create empty array for numbers
const numberArray = [];
let number = 0;
let message = '';

/**
 * Message function
 */
function messageFuntion() {
  const output = document.querySelector('.output');

  message = `
        <tr class="row">
        <td class="col numberIndex">#${numberArray.length}</td>
        <td class="col numberChecked">${number}</td>
        </tr>`;

  output.insertAdjacentHTML('beforeend', message);
}

// Click function
document.querySelector('.btn-ckeck').addEventListener('click', () => {
  const numberInput = document.querySelector('#number').value;
  number = Math.floor(numberInput);
  numberArray.push(numberInput);

  console.log(numberArray.length, number);

  testGame();
});

function testGame() {
  if (gameOver === false) {
    messageFuntion();
    checkNumber();
  } else {
    gameOverFunction();
  }
}

/**
 * check whether it is the correct number.
 */

function checkNumber() {
  if (number !== randomNumber) {
    console.log('This is the wrong number, please try it agian');
  } else {
    console.log('Congratulations! This was the correct number');
    gameOverFunction();
  }
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
