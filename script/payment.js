const payBtn=document.getElementsByClassName("button")[0];
const dialog=document.getElementsByClassName("modal")[0];
const closeBtn=document.getElementsByClassName("close-btn")[0];
const form = document.querySelector(".form");

payBtn.addEventListener("click", () => {
  if (form.checkValidity()) { // it will checks whether the field is filled up or not and if it is filled it will open dialog box
    dialog.showModal();
  } else {
    form.reportValidity();  // if the field is not fill up then it will ask to fill
  }
});

    closeBtn.addEventListener("click",()=>{
        dialog.close();
        window.location.href="../pages/character.html";
    })

paymentBtn();

