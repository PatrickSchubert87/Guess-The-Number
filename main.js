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


document.querySelector('.btn-ckeck').addEventListener('click', () => {
    const numberInput = document.querySelector('#number').value;
    document.querySelector('.numberChecked').innerHTML = numberInput;
})

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }