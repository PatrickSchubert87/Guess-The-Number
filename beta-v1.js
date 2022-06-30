(function () {
  function random() {
  return Math.floor(Math.random() * 100);
}

const randomNumber = random();

/**
 * Game Over Function
 */

let gameOver = false;

function gameOverFunction() {
  if (numberArray.length < 10) {
    alert('Congratulation, you won!');
    gameOver = true;
    restartBtn();
  } else {
    alert('Game Over, you lost!');
    gameOver = true;
    restartBtn();
  }
}

/**
 * Check input field
 */

// create empty array for numbers
const numberArray = [];
let number = 0;
let message = '';
let htmlTag = '';

// Click function
document.querySelector('.btn-ckeck').addEventListener('click', () => {
  const numberInput = document.querySelector('#number').value;
  number = Math.floor(numberInput);
  numberArray.push(numberInput);

  console.log(numberArray.length, number);

  testGame();
});

function testGame() {
  if (gameOver === false && numberArray.length < 10) {
    // messageFuntion();
    checkNumber();
  } else {
    gameOverFunction();
  }
}

/**
 * check whether it is the correct number.
 */


 function checkNumber() {
    if (number === randomNumber) {
        console.log('Congratulations! This was the correct number');
        gameOverFunction();
      // console.log('This is the wrong number, please try it agian');
      
    } else {
        if(number < randomNumber) {
            message = 'The number is too low, please enter a new number';
            // document.querySelector('.message').textContent = message;
            messageFuntion();
            // message = `<span class="text-success">The number is too low, please enter a new number.</span>`;
            console.log(`The number is too low, please enter a new number`);
        }
        if(number > randomNumber) {
            // message = `<span class="text-error">The number is too heigh, please enter a new number.</span>`;   
            message = 'The number is too heigh, please enter a new number';
            // document.querySelector('.message').textContent = message;
            messageFuntion();
            console.log(`The number is too heigh, please enter a new number`);
        }
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
})();