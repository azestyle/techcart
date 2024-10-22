let addbtn=document.querySelectorAll('.cart-div');
let localebox=[];
let orderlist=document.querySelector('.bucket-list')
let subtotal=document.querySelector('.subtotal');
let s1totala1= document.querySelector('.s1totala1');
let totalvals=document.querySelector('.totalvals');
addbtn.forEach((btn)=>{
    btn.addEventListener('click',(events)=>{
        let bigbox=events.target.closest('.big-js');
        let pricebox=bigbox.querySelector('.price-js').innerText;
        let tittlebox=bigbox.querySelector('.tittle-js').innerText;
        let imgbox=bigbox.querySelector('.img-js').src

        let product={
            img:imgbox,
            tittle:tittlebox,
            price:pricebox,
            value: 1
        }

        checklocale();
        checkcart(product);
        localStorage.setItem('cart', JSON.stringify(localebox));
        addlist();
    })
})

function checklocale(){
    if(localStorage.getItem('cart')===null){
        localebox=[];
    }else
    {
        localebox=JSON.parse(localStorage.getItem('cart'));
    }
}

function checkcart(elements){
 let tested=localebox.find(item=>item.img===elements.img && item.tittle===elements.tittle && item.price===elements.price);
 if(tested){
    tested.value++;
 }else{
    localebox.push(elements);
 }
 addlist();
 updateTotalPrice();
 updateTotalValue();
};

function addlist(){
    orderlist.innerHTML="";
    let takebox=JSON.parse(localStorage.getItem('cart'))||[];
    takebox.forEach((element,index)=>{
        if(element.img && element.tittle && element.price){
            let list=document.createElement('div');
            list.setAttribute('class','s1-listen');
            list.innerHTML=`
                        <div class="s1-l-gr">
                         <p class="s1img"><img src=${element.img}  class="imag"></p>
                        <p class="s1tittle">${element.tittle}</p>
                        <button class="dltbtn">&times;</button>
                        </div>
                         <p class="s1price">${element.value} x AUD $ ${element.price}.00</p>  
                      
                    
                       `
                      
            orderlist.append(list);   
            let dltbtn=list.querySelector('.dltbtn');
            dltbtn.addEventListener('click',()=>{
                takebox.splice(index,1);
                localStorage.setItem('cart',JSON.stringify(takebox));
                localebox=takebox;
                addlist();
                updateTotalPrice();
                updateTotalValue();
            })     
        }
    })
}

function updateTotalPrice() {
    let totalprc = localebox.reduce((sum, item) => sum + (Number(item.price)*item.value), 0);
    subtotal.innerText=`Subtotal: AUD $ ${totalprc}.00`
    s1totala1.innerText=`${totalprc}`
    
    
};

function updateTotalValue() {
    let totalval = localebox.reduce((sum, item) => sum + item.value, 0);
    totalvals.innerText=`${totalval}`
}    
    
document.addEventListener('DOMContentLoaded',()=>{
    checklocale();
    addlist();
    updateTotalPrice();
    updateTotalValue();
})









