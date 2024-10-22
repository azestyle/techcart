let sliders = document.querySelectorAll('.slider-box');
sliders.forEach((item, index) => {
    item.style.left = `${index * 100}%`;
});


let lefts=document.querySelector('.lefts');
let count=0
lefts.addEventListener('click',()=>{
count--;
if(count<0){
    count=sliders.length-1;
}
sliders.forEach((event)=>{
    event.style.transform=`translateX(-${count*100}%)`
    activeOpacity()
    addBar()
})
})

let rights=document.querySelector('.rights');
rights.addEventListener('click',()=>{
    count++
    if(count>sliders.length-1){
        count=0;
    }
    sliders.forEach((event)=>{
        event.style.transform=`translateX(-${count*100}%)`
        activeOpacity()
        addBar()
    })
})

function activeOpacity(){
   sliders.forEach((event,index)=>{
    if(index===count){
    event.style.opacity='1';
    }
    else{
        event.style.opacity='0';
    }
}) 
}
activeOpacity();

let slidergr=document.querySelector('.slider-group');


slidergr.addEventListener('mouseover',()=>{
    rights.style.opacity='1';
    lefts.style.opacity='1';
    rights.style.transform=`translateX(0%)`;
    lefts.style.transform=`translateX(0%)`;
});
slidergr.addEventListener('mouseout',()=>{
    rights.style.opacity='0';
    lefts.style.opacity='0';
     rights.style.transform=`translateX(-50%)`
    lefts.style.transform=`translateX(50%)`
});

let swipeBar=document.querySelectorAll('.bar-click');

function addBar(){
   swipeBar.forEach((event,index)=>{
    if(index===count){
        event.style.backgroundColor= `white`;
    }else{
        event.style.backgroundColor= `rgba(255, 252, 252, 0.289)`;
    }
}) 
}

addBar();

swipeBar.forEach((ev,index)=>{

    ev.addEventListener('click',()=>{
        sliders.forEach((element)=>{
            element.style.transform = `translateX(-${index * 100}%)`;
        })
        count=index;
        addBar();
        activeOpacity();
    })
})








