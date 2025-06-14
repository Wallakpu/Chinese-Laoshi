const times=document.querySelectorAll(".specific-times");
const shift=document.getElementsByClassName("time-select");
const morning=document.getElementById('morning');
const day=document.getElementById("day");
const evening=document.getElementById("evening");
const timebtn=document.querySelectorAll(".time-btn");
const bookbtn=document.getElementsByClassName('book-btn')[0];
const dialoge=document.getElementsByClassName('success-box')[0];

const container=document.querySelector('.container');
const selectclass1=document.querySelector('.select-button1');
const selectclass2=document.querySelector('.select-button2');



const timePeriod=()=>{
morning.addEventListener("click",()=>{
     document.getElementById("morning-times").style.display = 'block';
     
})
day.addEventListener("click",()=>{
     document.getElementById("day-times").style.display = 'block';
     
})
evening.addEventListener("click",()=>{
     document.getElementById("evening-times").style.display = 'block';
     
})
}

const button = () => {
  timebtn.forEach(btn => {
    btn.addEventListener("click", () => {
      timebtn.forEach(b => {
        b.style.backgroundColor = "";
        b.style.color = "";
      });

      // to highlight the clicked button
      btn.style.backgroundColor = "blue";
      btn.style.color = "white";
    });
  });
};


const bookBotton=()=>{
    bookbtn.addEventListener("click",()=>{
        dialoge.style.display ='block';
        dialoge.showModal();
    })
}

const selectClass=()=>{
  if(selectclass1){
    selectclass1.addEventListener("click",()=>{
        container.style.display='block';
        selectclass2.disabled=true;
    })
  }
  if(selectclass2){
    selectclass2.addEventListener("click",()=>{
               container.style.display='block';
                const para=document.getElementById('class-type')
                  para.innerHTML = 'Schedule Your <span class="red" style="color: #e53e3e;">Group class</span>';
                    selectclass1.disabled=true;
                

    })
  }
    
}

const closebtn=()=>{   //TO close the dialogue that says booking successfull
  const okayBtn=document.querySelector('.close-btn');
  okayBtn.addEventListener("click",()=>{
    dialoge.close();
    dialoge.style.display='none';
  })
}

button();
timePeriod();
bookBotton();
selectClass();

