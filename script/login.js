const displayweb =() => {
    const password=document.getElementById("password").value;
    const email=document.getElementById("email").value;
    if(password.length<8){
        alert("Password must be 8 character");
    }
    else if(!email.includes("@")){
        alert("Incorrect email! Please try again");
    }
    else {
        window.location.href="/index.html";
    }
}