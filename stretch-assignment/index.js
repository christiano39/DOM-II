const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
const blocks = Array.from(document.querySelectorAll('.block'));
let order = 0;

blocks.forEach(block => {
    block.addEventListener('click', e => {
        order--;
        block.style.order = `${order}`; 
    });
});