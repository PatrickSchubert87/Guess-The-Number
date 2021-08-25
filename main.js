function startGame () {
    function random () {
        return Math.floor(Math.random() * 100);
    }
    return random();
}

console.log(startGame());

/**
 * Check input field
 */

// create empty array for numbers
const numberArray = [];

document.querySelector('.btn-ckeck').addEventListener('click', () => {
    const numberInput = document.querySelector('#number').value;
    numberArray.push(numberInput);
    document.querySelector('.numberChecked').textContent = numberArray;
})

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }