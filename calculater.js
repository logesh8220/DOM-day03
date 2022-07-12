let screen = document.getElementById("sout");
function display(num){
    screen.value +=num;
}
function calcul(){
    try {
        screen.value = eval(screen.value);
    }
    catch (err){
       alert("Invalid Input")
       screen.value = screen.value = ""
    }
}
function Clear(){
    screen.value= screen.value = "";
}
function del(){
    screen.value = screen.value.slice(0,-1)
}
