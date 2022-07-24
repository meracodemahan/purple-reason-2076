

let card = document.getElementById("cardcontainer")
card.addEventListener("click",function(){


    document.querySelector("#cardname").style.display = "block";

})





let cardclose=document.querySelector(".cardclose")
cardclose.addEventListener("click",function(){

document.querySelector("#cardname").style.display = "none";

})


let payments=()=>{
let c= document.querySelector("#cardname");
let paymentpro= document.createElement("img")
paymentpro.className="paypro"
paymentpro.src="processpayment.png"
c.innerHTML =" "
c.append(paymentpro)


setTimeout(function(){
    c.innerHTML =" "
    paymentpro.src="payment-successful.png"
    c.append(paymentpro)
},2000)

setTimeout(function(){
    window.location.href="../index.html"
},4000)   

}






