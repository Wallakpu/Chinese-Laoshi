const payBtn = document.getElementsByClassName("button")[0];
const dialog = document.getElementsByClassName("modal")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];
const form = document.querySelector(".form");

// Show dialog box if form is filled
payBtn.addEventListener("click", () => {
  if (form.checkValidity()) {
    dialog.showModal(); // payment modal
  } else {
    form.reportValidity(); // form not filled warning
  }
});

// When the payment is successful and user clicks close
closeBtn.addEventListener("click", () => {
  dialog.close();

  // Save premium status
  localStorage.setItem("isPremiumUser", "true");

  // Go to character page
  window.location.href = "../pages/character.html";
});
