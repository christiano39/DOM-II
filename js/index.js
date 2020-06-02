// H1 color change on hover
mainHeading = document.querySelector('h1.logo-heading');

function randomColorOnHover(e){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.color = `rgb(${r}, ${g}, ${b})`;
}

function backToDefaultColor(e){
    e.target.style.color = '#212529';
}

mainHeading.addEventListener('mouseenter', randomColorOnHover);
mainHeading.addEventListener('mouseleave', backToDefaultColor);