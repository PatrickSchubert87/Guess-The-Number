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
let number = 0;
let message = '';

document.querySelector('.btn-ckeck').addEventListener('click', () => {
    const numberInput = document.querySelector('#number').value;
    number = numberInput;
    numberArray.push(numberInput);

    console.log(numberArray.length, number);

    message = 
    `
    <tr class="row">
    <td class="col numberIndex">#${numberArray.length}</td>
    <td class="col numberChecked">${number}</td>
    </tr>`;

    document.querySelector('.output').insertAdjacentHTML("beforeend", message);
    // document.querySelector('.output').appendChild(message);
})

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }