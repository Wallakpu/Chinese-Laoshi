 function showSidebar() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("show");
  }
  
  document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navMenu").classList.remove("show");
  });
});
