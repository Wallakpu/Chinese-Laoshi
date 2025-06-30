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

const hskLvlSelect=document.querySelector(".hsk-select");
const dateSelect=document.getElementsByClassName("date-select");


  const okayBtn=document.querySelector('.close-btn');

  let selectedSpecificTime = ""; // Stores which time user selects


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
      btn.style.backgroundColor = "#d53030";
      btn.style.color = "white";

      selectedSpecificTime = btn.getAttribute("data-specific-time");
    });
  });
};


const bookBotton=()=>{
    bookbtn.addEventListener("click",()=>{
      
        const selectedLvl=hskLvlSelect.value;  
        const selectedDate = document.getElementById("class-date").value;

        if(!selectedLvl){
        alert("Please select any of the hsk level");
        return;
        }

        if(!selectedDate){
          alert("Please select the date");
          return;
        }
        if(!selectedSpecificTime){
          alert("Please select the shift!");
          return;
        }
          dialoge.style.display ='block'; // the dialogue box will only be visible if selectedlvl is true
        dialoge.showModal();
        document.body.style.overflow = 'hidden'; 

      
       


    })
}

const selectClass=()=>{
  if(selectclass1){
   
    selectclass1.addEventListener("click",()=>{
      window.scrollBy({ top: 500, behavior: "smooth" });
        container.style.display='block';
        selectclass2.disabled=true;
    })
  }
  if(selectclass2){
    selectclass2.addEventListener("click",()=>{
     window.scrollBy({ top: 500, behavior: "smooth" });

               container.style.display='block';
                const para=document.getElementById('class-type')
                  para.innerHTML = 'Schedule Your <span class="red" style="color: #e53e3e;">Group class</span>';
                    selectclass1.disabled=true;
                

    })
  }
    
}

const closebtn=()=>{   //TO close the dialogue that says booking successfull
  okayBtn.addEventListener("click",()=>{
    dialoge.close();
    dialoge.style.display='none';
  })
}

button();
timePeriod();
bookBotton();
selectClass();
closebtn();

