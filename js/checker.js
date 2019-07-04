function showResult(){
    var carModel = document.getElementById("carPicker").value;
    var yearPicker = document.getElementById("yearPicker").value;
    if(yearPicker ==="4"){
        window.location.href = "../index.html";
    }else if(yearPicker ==="1"){
        alert("Go pass your driving test!!!")
    } else if((carModel ==="3"&& yearPicker==="2")|| (carModel === "5"&& yearPicker==="2")){
    alert("You are too young to understand! But keep driving, and you'll get better");
        if(carModel ==="3"){
        window.location.href = "../views/audi.html"
        }else{
        window.location.href = "../views/opel.html"
        }
    }
    else if(yearPicker==="2"){
        alert("You are only available to drive Audi or Opel! Sorry =(")
    }
    if(yearPicker ==="3"&& carModel !=="2"){
        alert("You are almost the coolest!");
        if(carModel ==="3"){
            window.location.href = "../views/audi.html"
        }else if (carModel ==="5") {
            window.location.href = "../views/opel.html"
        }else {
            window.location.href = "../views/bmw.html"
        }
    } else if(yearPicker==="3"){
        alert("Sorry but you can not afford yourself to drive a Chevrolet!")
    }
}