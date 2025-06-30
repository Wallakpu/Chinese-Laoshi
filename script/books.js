const cart = document.getElementsByClassName("login-note")[0];
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
const buyNow=document.querySelectorAll(".buy-now-btn");

const bundleBtn=document.querySelector(".bundle-button");

let cartCount = 0;

const cartAdd = () => {
    addToCartBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            cartCount++;
            cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart : ${cartCount} items`;
            window.scrollTo({ top: 0, behavior: "smooth" });// It will scroll to the number of cart we have added so that user dont get confused whether he has added successfully or not
        });
    });
};

const payment=()=>{  //when we click on buy now it will leads to payment.html
    buyNow.forEach((buyNow) =>{
        buyNow.addEventListener("click",()=>{
            setTimeout(()=>{
                window.location.href="payment.html";
            },500);
            
        })
    })
}


const bundlePack=()=>{ /// Bundle pack
    bundleBtn.addEventListener("click",()=>{
        window.location.href="payment.html";
    })
}
bundlePack();
payment();
cartAdd();
