


let btn = document.querySelector("form")

btn.addEventListener("submit",function(){
    event.preventDefault();
    getData();
})


let userData = JSON.parse(localStorage.getItem("userData")) || [];
function getData(){
    
    let obj ={
        username:form.username.value,
        password: form.password.value
    }
    
    if(checkSignin(obj.username,obj.password)== true){
        localStorage.setItem("login",JSON.stringify(obj))
        alert("LogIn successful")
    }
    else{
        alert("Wrong Username or Password");
    }
}


function checkSignin(username,pass){
    let filtered = userData.filter(function(el){
        return el.username === username && el.password === pass

    })
    if(filtered.length>0){
        return false;
    }
    else{
        return true;
    }
}