const links =
document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click",

function(e){

e.preventDefault();

const id =
this.getAttribute("href");

document.querySelector(id)

.scrollIntoView({

behavior:"smooth"

});

});

});


// Animation on Scroll

const cards =
document.querySelectorAll(

".card,.skills div,.edu"

);

window.addEventListener(

"scroll",

()=>{

cards.forEach(card=>{

const position =
card.getBoundingClientRect().top;

const screen =
window.innerHeight;

if(position < screen-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform=

"translateY(50px)";

card.style.transition=

"0.8s";

});