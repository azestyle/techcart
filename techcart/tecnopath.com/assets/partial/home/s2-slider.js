let s2lider=document.querySelectorAll('.product-slider-box-gr');
let s2letf=document.querySelector('.s2letf');
let s2right=document.querySelector('.s2right')
s2lider.forEach((item, index)=>{
    item.style.left=`${index*100}%`
})



let counts=0;

s2right.addEventListener('click',()=>{
    counts++;

if(counts>s2lider.length-1){
    counts=0
}

    s2lider.forEach((ev)=>{
      ev.style.transform=`translateX(-${counts*100}%)`
      chaincolor();
    });
   
})

s2letf.addEventListener('click',()=>{
    counts--;
    if(counts<0){
        counts=s2lider.length-1
    }
    s2lider.forEach(ev=>{
        ev.style.transform=`translateX(-${counts*100}%)`
        chaincolor();
    });
    
})



let addsliders=document.querySelector('.add-to-slider');


let leftdiv=document.querySelector('.left-div');
let rightdiv=document.querySelector('.right-div')
addsliders.addEventListener('mouseover',()=>{
  leftdiv.style.opacity='1';
  rightdiv.style.opacity='1';
  leftdiv.style.transform= `translateX(0%)`;
  rightdiv.style.transform= `translateX(0%)`;
})

addsliders.addEventListener('mouseout',()=>{
  leftdiv.style.opacity='0';
  rightdiv.style.opacity='0';
leftdiv.style.transform= `translateX(-50%)`;
rightdiv.style.transform= `translateX(50%)`;
})


let s2clicked=document.querySelectorAll('.s2clicked');
function chaincolor(){
    s2clicked.forEach((ev,index)=>{
    if(index===counts){
        ev.style.backgroundColor= `black`;
    }else{
        ev.style.backgroundColor= `rgba(0, 0, 0, 0.256)`;
    }
})
}
chaincolor();

s2clicked.forEach((events,index)=>{
    events.addEventListener('click',()=>{

        s2lider.forEach((el)=>{
            el.style.transform=`translateX(-${index*100}%)`
            counts=index
            chaincolor();
        })
    })
})