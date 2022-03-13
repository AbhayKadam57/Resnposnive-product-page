

// CODE TO OPEN MENU IN MOBILE AND TABLET


const menu = document.querySelector(".menu")

const closeButton = document.querySelector(".close")

const menu_card = document.querySelector(".menu-card")

const hero_image = document.querySelector(".hero-image")

const leftBtn = document.querySelectorAll(".left")

const rightBtn = document.querySelectorAll(".right")
const product = document.querySelectorAll(".product")

const arrow = document.querySelectorAll(".arrow")

const slide = document.querySelectorAll(".slide")



menu.addEventListener("click",(e)=>{

    menu_card.classList.add("show")


})

closeButton.addEventListener("click",(e)=>{

    menu_card.classList.remove("show")
})

console.log(product.length)




// CODE TO MANUAL SLIDER

let counter = 0


function rightSlide(){

    rightBtn.forEach(function(rightBtn){
        rightBtn.addEventListener("click",(e)=>{
            console.log("k")

            counter++;
            carousal()
            carousal1()
          
    
        })

        
    })

  

}

function leftSlide(){

    leftBtn.forEach(function(leftBtn){

        leftBtn.addEventListener("click",(e)=>{
    
            counter--;
            carousal()
            carousal1()
            
        })
    
    
    })

}



rightSlide()
leftSlide()



function carousal(){

    if(counter===product.length-4){

        counter=0;

    }
    if(counter<0){

        counter = product.length-5
    }
    product.forEach(function(product){

        product.style.transform = `translateX(-${counter*100}%)`
    })

   

}






// CODE FOR ADD AND DELETING QUANTITY 

const product2 = document.querySelectorAll(".product2")

const increase = document.querySelector(".increase")

const decrease = document.querySelector(".decrease")

const quantity = document.querySelector(".quantity")

const addToCart = document.querySelector(".addtocart")

const items = document.getElementById("items")

const cart = document.querySelector(".cart")

const basket = document.querySelector(".basket")

const item_price = document.querySelector(".item-price")

console.log(item_price.innerText.slice(1))


const total = document.getElementById("total")

const purchase = document.querySelector(".purchase")

const checkout = document.querySelector(".checkout")

const Delete = document.querySelector(".delete")

let count = 0



increase.addEventListener("click",(e)=>{
    
    count++

    quantity.innerText = count
    
})


decrease.addEventListener("click",(e)=>{

    count--

    if(count<0){

        count=0
        
    }
    if(count==0){

        items.style.visibility ="hidden"
    }

    quantity.innerText = count
    
})






// CODE TO ADD ITEMS N CART

addToCart.addEventListener("click",(e)=>{

    items.innerHTML = count

    if(count>0){
        items.style.visibility = "visible"
        quantities.innerHTML = count
        purchase.style.visibility = "visible"
        checkout.style.visibility= "visible"
        text.style.visibility="hidden"
        total.innerText = "$" + (quantities.innerHTML*item_price.innerText.slice(1))

       
    }else{

        

        items.style.visibility = "hidden"
        purchase.style.visibility = "hidden"
        checkout.style.visibility= "hidden"

    }
    
})

let final_quantity = quantity.innerHTML

let quantities= document.getElementById("quantities")

let finalQuantities = final_quantity

quantities.innerHTML= finalQuantities



cart.addEventListener("click",(e)=>{


    basket.classList.toggle("show")
    
    // CODE TO REMOVE CART WHEN CLICK IN ANYWHERE
    document.addEventListener("mouseup",(e)=>{

        if(!e.target.classList.contains("basket")){
 
         basket.classList.remove("show")
                  
        }

        
     })
 
})

const text = document.querySelector(".text")






// CODE TO DELETE THE ITEM FROM THE CART

document.addEventListener("mouseup",(e)=>{

    if(e.target.classList.contains("delete")){

        purchase.style.visibility="hidden"
        checkout.style.visibility="hidden"
        items.style.visibility="hidden"
        text.style.visibility="visible"
        
        
    }
}

)






// CODE TO CLICK AND SHOW SAMPLE IMAGE ON DESKTOP

const hero_image5= document.querySelector(".hero-image5")


const product1 = document.querySelectorAll(".product1")


const angle12 = document.querySelectorAll(".angle12")

const product12 = document.querySelectorAll(".product12")

const product13 = document.querySelectorAll(".product13")

const angle1 = document.querySelectorAll(".angle1")
product12.forEach(function(product12){

    
    product12.addEventListener("click",(e)=>{

        
        const id = e.currentTarget.dataset.id

        const value = e.currentTarget.value

        hero_image5.innerHTML =  ` <img id=${id} class="product active " src="./images/image-product-${id}.jpg" alt="">`

        // THIS FUNCTION IS TO HIGHLIGHT THE SAMPLE IMAGE IN BOTTOM
        view(id-1)
         
    })   
    
})



 // THIS FUNCTION IS TO HIGHLIGHT THE SAMPLE IMAGE IN BOTTOM USE IN LINENUMBER :284
let num = 1;

function view(n){

    num=+n
    highLight(num)

}



function highLight(n) {

    let j
    for (j = 0; j <product2.length;j++){

        product12[j].style.outline ="0px"
        angle1[j].style.opacity ="1"

    }

    if(n>product2.length){

        num=1
    }

    if(n<0){

        num = product2.length
    }
    
    product12[num].style.outline ="3px solid orange"
    angle1[num].style.opacity ="0.5"

}






// CODE TO SHOW THE SAMPLE WHEN CLICK ON HERO IMAGE

let counts = 1

slideFun(counts)


let timer = setInterval(autoSlide,10000)


function autoSlide(){

    counts+=1;
    slideFun(counts)
}


function plusSlide(n){

    counts+=n;
    slideFun(counts)
    resetTimer()
} 

function currentSlide(n){

    counts = n
    slideFun(counts)
    resetTimer()
}

function resetTimer(){

    clearInterval(timer)
    timer = setInterval(autoSlide,10000)
}


function slideFun(n){

    let i;

    for(i=0;i<product2.length;i++){

        product2[i].style.display="none"
        angle12[i].style.opacity ="1"
        product13[i].style.outline="0px"
        

    }

    if(n>product2.length){

        counts=1;
    }
    if(n<1){

        counts = product2.length
    }

    product2[counts-1].style.display="block"
    angle12[counts-1].style.opacity="0.5"
    product13[counts-1].style.outline="3px solid orange"
   
}





// CODE TO CLOSE THE HERO IMAGE IMAGE

const lightBox = document.querySelector(".lightBox")

const lightClose = document.querySelector(".lightclose")

hero_image5.addEventListener("click",(e)=>{

    console.log("j")
    lightBox.style.display="block"
})

lightClose.addEventListener("click",(e)=>{


    lightBox.style.display="none"

})
