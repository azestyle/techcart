let clicker=document.querySelector('.clicker');
let productlist=document.querySelector('.product-lists')

clicker.addEventListener('click',()=>{
    if(productlist.style.transform==="translateY(5%)"){
       productlist.style.transform="translateY(0)"
       productlist.style.visibility = "visible";
       productlist.style.opacity = "1";
        
    }else{
        productlist.style.transform="translateY(5%)"
        productlist.style.opacity = "0";
        productlist.style.visibility = "hidden"; 
         
    }
    
    })

    let prevScrollpos = window.scrollY;
    let header = document.querySelector(".header");
    
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos < 70) {
            header.style.top = "0";
        } else {
            header.style.top = "-110px";
        }
        prevScrollpos = currentScrollPos;
    });
    
