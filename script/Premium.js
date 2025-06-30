const getStarted=document.querySelectorAll(".select-button1");
const getStarted2=document.querySelectorAll(".select-button2");

const startedBt=()=>{
    getStarted.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            window.location.href="payment.html"
        })
    })
}

const startedBt2=()=>{
    getStarted2.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            window.location.href="payment.html"
        })
    })
}
startedBt2();
startedBt();