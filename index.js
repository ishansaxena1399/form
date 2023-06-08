const form = document.querySelector("form");
const password = document.getElementById("password").value;
const confirmpassword = document.getElementById("confirmpassword").value;

const button = document.querySelector("button")

button.addEventListener("click",function(){
    if(password!=confirmpassword){
        password.setCustomValidity("Password Mismatch")
    }
})