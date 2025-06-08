
// regular expression

let nameregex = /^[a-zA-Z]+$/
let emailregex = /^[a-zA-Z0-9]+@gmail\.com/
let passwordregex = /^[a-zA-Z0-9]{6,}$/

// selecting input tags

let user = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")

// comparing regular expression and selecting input tages




let submit = document.getElementById("submit")
submit.addEventListener("click",function(event){
    event.preventDefault()

    if(nameregex.test(user.value) == false)
{
    document.querySelector(".nameerror").style.display = "inline"
    
    
}
else{
    document.querySelector(".nameerror").style.display = "none"
}



    if(emailregex.test(email.value) == false)
{
    document.querySelector(".emailerror").style.display = "inline"
    
    
}
else{
    document.querySelector(".emailerror").style.display = "none"
}



    if(passwordregex.test(password.value) == false)
{
    document.querySelector(".passworderror").style.display = "inline"
    
    
}
else{
    document.querySelector(".passworderror").style.display = "none"
}

if(nameregex.test(user.value) && emailregex.test(email.value) && passwordregex.test(password.value))
{
    alert("Form Submitted Successfully")
}

})



function check(){
    if(user.value!=="" && email.value!=="" && password.value!=="")
    {
        submit.disabled=false
    }
    else
    {
        submit.disabled=true
    }
        
}

user.addEventListener("input",check)
email.addEventListener("input",check)
password.addEventListener("input",check)



