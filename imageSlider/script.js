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
    currentDots()
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
    currentDots()
}


function autoslide(){
    continueSliding=setInterval(()=>{
        nextImageCall();
        currentDots()
    },2000)
}
autoslide();

main.addEventListener('mouseover',()=>{
    clearInterval(continueSliding);
});

main.addEventListener('mouseout',()=>{
    autoslide();
})



function currentDots(){
    dots.forEach((items,index)=>{
        items.classList='';
    });
    dots[count].classList+='active';
}

dots.forEach((items,index)=>{
    items.addEventListener('click',()=>{
        if(index>count){
            slides[count].style.animation='next1 .1s ease-in forwards';
            count=index;
            slides[count].style.animation='next2 .1s ease-in forwards';
        }else if(index===count){
            return;
        }else{
            slides[count].style.animation='prev1 .1s ease-in forwards';
            count=index;
            slides[count].style.animation='prev2 .1s ease-in forwards';
        }
        currentDots()
    })
});
