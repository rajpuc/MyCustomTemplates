const slides=document.querySelectorAll('.slide');
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const main=document.querySelector('#main');
let counter=0;
let continueSliding;
next.addEventListener('click',nextImageCall);
function nextImageCall(){
    slides[counter].style.animation='next1 0.5s ease-in forwards'
    if(counter==slides.length-1){
        counter=0;
    }else{
        counter++;
    }
    
    slides[counter].style.animation='next2 0.5s ease-in forwards'
}

prev.addEventListener('click',prevImageCall);
function prevImageCall(){
    slides[counter].style.animation='prev1 0.5s ease-in forwards'
    if(counter==0){
        counter=slides.length-1;
    }else{
        counter--;
    }
    
    slides[counter].style.animation='prev2 0.5s ease-in forwards'
}


function autoslide(){
    continueSliding=setInterval(()=>{
        nextImageCall();
    },2000)
}
autoslide();

main.addEventListener('mouseover',()=>{
    clearInterval(continueSliding);
});

main.addEventListener('mouseout',()=>{
    autoslide();
})