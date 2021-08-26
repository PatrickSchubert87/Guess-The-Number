// const randomNumber = 0;
// function startGame () {
//     function random () {
//         return Math.floor(Math.random() * 100);
//     }
//     randomNumber = random();
//     return randomNumber;
// }

// function startGame () {
    function random() {
        return Math.floor(Math.random() * 100);
    }
    // randomNumber = random();
    // return randomNumber;
// }
const randomNumber = random();
// console.log(startGame());

/**
 * Game Over Function
 */

let gameOver = false;

function gameOverFunction() {
    alert('Game Over');
    gameOver = true;
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

    message = 
        `
        <tr class="row">
        <td class="col numberIndex">#${numberArray.length}</td>
        <td class="col numberChecked">${number}</td>
        </tr>`;

    output.insertAdjacentHTML("beforeend", message);
}

// Click function
document.querySelector('.btn-ckeck').addEventListener('click', () => {
        const numberInput = document.querySelector('#number').value;
        number = Math.floor(numberInput);
        numberArray.push(numberInput);

        console.log(numberArray.length, number);

        // message = 
        // `
        // <tr class="row">
        // <td class="col numberIndex">#${numberArray.length}</td>
        // <td class="col numberChecked">${number}</td>
        // </tr>`;

        // checkNumber();

        // document.querySelector('.output').insertAdjacentHTML("beforeend", message);


        testGame();
    });

function testGame() {
    if(gameOver === false) {
        // btnCheckfunction();
        messageFuntion();
        checkNumber();
    } else {
        // alert('The Game is over');
        // gameOver = true;
        gameOverFunction();
    }
}
/**
 * check whether it is the correct number.
 */

function checkNumber() {
    if(number !== randomNumber) {
        console.log('This is the wrong number, please try it agian');
    } else {
        console.log('Congratulations! This was the correct number');
        gameOverFunction();
        gameOver = true;
    }
}