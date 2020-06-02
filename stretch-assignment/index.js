const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
const blocks = Array.from(document.querySelectorAll('.block'));
let order = 0;
let interval;

blocks.forEach(block => {
    let move = 0;
    block.addEventListener('click', e => {
        order--;
        block.style.order = `${order}`; 
    });
    block.addEventListener('mousedown', e => {
        interval = setInterval(function(){
            move += 2;
            block.style.transform = `translateX(${move}px)`;
        }, 10);
    });
    window.addEventListener('mouseup', e => {
        clearInterval(interval);
        //move = 0;
        block.style.transform = `translateX(${move}px)`;
    });
});

