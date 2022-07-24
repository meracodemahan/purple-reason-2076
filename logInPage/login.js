
    document.querySelector("#form").addEventListener("submit",login_fn);

    let arr_from_ls= JSON.parse(localStorage.getItem("details")) || [];
    function login_fn(event) {
        event.preventDefault();
        let email = document.querySelector("#username").value;
        let password= document.querySelector("#password").value;
    



        let status=true;
        for (let i = 0; i <arr_from_ls.length; i++) {
            if (arr_from_ls[i].email== email &&arr_from_ls[i].password==password) {
                status=false;
                  break;

            }
        }
        if (status==true) {
            if(email==""||password==""){
                alert("Fill the all fields")
            }
            else{
                alert("Not Registered")
            }
              
        }

        else { 
            
            alert("Successfully login");
                location.href = "../index.html";
        }
    }
