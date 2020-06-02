// H1 color change on hover - mouseenter, mouseleave
mainHeading = document.querySelector('h1.logo-heading');

function randomColorOnHover(e){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.color = `rgb(${r}, ${g}, ${b})`;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function backToDefaultColor(e){
    e.target.style.color = '#212529';
}

mainHeading.addEventListener('mouseenter', randomColorOnHover);
mainHeading.addEventListener('mouseleave', backToDefaultColor);

// Header border - click
const header = document.querySelector('header');
header.addEventListener('click', e => {
    e.target.classList.toggle('solid-border');
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
