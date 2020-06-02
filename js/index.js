// H1 color change on hover - mouseenter, mouseleave
mainHeading = document.querySelector('h1.logo-heading');

function randomColorOnHover(e){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.color = `rgb(${r}, ${g}, ${b})`;
    e.stopPropagation();
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function backToDefaultColor(e){
    mainHeading.style.color = '#212529';
}

mainHeading.addEventListener('mouseenter', randomColorOnHover);
mainHeading.addEventListener('click', randomColorOnHover);

// H1 back to default color - dblclick
mainHeading.addEventListener('dblclick', backToDefaultColor); 

// Header border - click
const header = document.querySelector('header');
header.addEventListener('click', e => {
    header.classList.toggle('solid-border');
});

// Header Img border - wheel
const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('wheel', e => {
    headerImg.style.border = `2px solid ${randomColor()}`;
});

// Page Load alert - load
window.addEventListener('load', e => {
    alert('Page has loaded!');
});

// Nav Items - Focus
const navItems = Array.from(document.querySelectorAll('nav a'));
navItems.forEach(navItem => {
    navItem.addEventListener('focus', e => {
        navItem.style.color = `${randomColor()}`;
    });
});
navItems.forEach(navItem => {
    navItem.addEventListener('focusout', e => {
        navItem.style.color = '#212529';
    });
});

// Footer window size - resize
const windowSizeElement = document.getElementById('window-size');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
windowSizeElement.textContent = `Window width: ${windowWidth}, Window height: ${windowHeight}`;
window.addEventListener('resize', e => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    windowSizeElement.textContent = `Window width: ${windowWidth}, Window height: ${windowHeight}`;
});

// Main content imgs - scroll
const mainImages = Array.from(document.querySelectorAll('.img-content img'));
let degrees = 0;
window.addEventListener('scroll', e => {
    mainImages.forEach(image => {
        degrees += 0.5;
        image.style.transform = `rotate(${degrees}deg)`;
    })
});

// Copy
document.addEventListener('copy', e => {
    alert("Successfully copied!");
});

// F - keydown
const copyright = document.querySelector('.footer p:nth-of-type(1)');
document.addEventListener('keydown', e => {
    if (e.key === 'f'){
        copyright.textContent = "You have paid respects.";
    }
});