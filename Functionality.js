// oye pagal isme nahi ghusne ka samjha na 

const p2 = document.getElementById("page2");
const p1 = document.getElementById("page1");
const p = document.getElementById("p");
const para = document.getElementById("para");

para.addEventListener('click', () => {
    p1.classList.add('active');
    p2.classList.remove('active');
});

p.addEventListener('click', () => {
    p1.classList.remove('active');
    p2.classList.add('active');
});