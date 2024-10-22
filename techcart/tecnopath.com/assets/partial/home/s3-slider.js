let s7slider=document.querySelectorAll('.s7-slidergr')

s7slider.forEach((ev1,index)=>{
    ev1.style.left=`${index*100}%`
})


let s7left=document.querySelector('.s7left');
let countm=0

s7left.addEventListener('click',()=>{
    countm--;
    if(countm<0){
        countm=s7slider.length-1
    }
    s7slider.forEach((even)=>{
        even.style.transform=`translateX(-${countm*100}%)`
        s7chain()
    })
})

let s7right=document.querySelector('.s7right');
s7right.addEventListener('click',()=>{
    countm++;
    if(countm>s7slider.length-1){
        countm=0
    }
    s7slider.forEach((eves)=>{
        eves.style.transform=`translateX(-${countm*100}%)`
        s7chain()
    })
})

let s7coni=document.querySelector('.s7-slider');


let s7lbig=document.querySelector('.s7leftbg');
let s7rbig=document.querySelector('.s7rightbg');
s7coni.addEventListener('mouseover',()=>{
    s7lbig.style.opacity='1';
    s7rbig.style.opacity='1';
    s7lbig.style.transform= `translateX(0%)`;
    s7rbig.style.transform= `translateX(0%)`;
  })
  
  s7coni.addEventListener('mouseout',()=>{
    s7lbig.style.opacity='0';
    s7rbig.style.opacity='0';
    s7lbig.style.transform= `translateX(-50%)`;
    s7rbig.style.transform= `translateX(50%)`;
  })

  let s7clicked=document.querySelectorAll('.s7clicked');
function s7chain(){
    s7clicked.forEach((ev,index)=>{
    if(index===countm){
        ev.style.backgroundColor= `black`;
    }else{
        ev.style.backgroundColor= `rgba(0, 0, 0, 0.256)`;
    }
})
}
s7chain();

s7clicked.forEach((eventm,index)=>{
    eventm.addEventListener('click',()=>{

        s7slider.forEach((el)=>{
            el.style.transform=`translateX(-${index*100}%)`
            countm=index
            s7chain();
        })
    })
})