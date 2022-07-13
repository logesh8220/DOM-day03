function onsubmitbutton(event){
 event.preventDefault();
let finame = document.getElementById("fname").value
document.getElementById("n").innerHTML=finame
let lasname = document.getElementById("lname").value
document.getElementById("l").innerHTML = lasname
let email = document.getElementById("email").value
document.getElementById("e").innerHTML = email
let adress = document.getElementById("adress").value
document.getElementById("a").innerHTML = adress
let pin = document.getElementById("pin").value
document.getElementById("p").innerHTML = pin
let gender = document.getElementById("gender").value
document.getElementById("g").innerHTML = gender
let food = document.getElementById("food").value
document.getElementById("f").innerHTML = food
let state = document.getElementById("state").value
document.getElementById("s").innerHTML = state
let country = document.getElementById("country").value
document.getElementById("c").innerHTML = country
}

function clearfn(){
     document.getElementById("l").innerHTML=""
     document.getElementById("e").innerHTML=""
     document.getElementById("a").innerHTML=""
     document.getElementById("p").innerHTML=""
     document.getElementById("g").innerHTML=""
     document.getElementById("f").innerHTML=""
     document.getElementById("s").innerHTML=""
     document.getElementById("c").innerHTML=""

}
