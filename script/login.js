const displayweb =() => {
    const password=document.getElementById("password").value;
    const conformpassword=document.getElementsByClassName("pass2")[0].value;
    const email=document.getElementById("email").value;
    if(password.length<8){
        alert("Password must be 8 character");
    }
    else if(!email.includes("@")){
        alert("Incorrect email! Please try again");
    }
    else if(password!==conformpassword){
        alert("Password didn't match");
    }
    else {
          window.location.href = "../index.html";
    }
}