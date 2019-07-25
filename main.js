var mainHeader = document.getElementById("header");
function getSignHoroscope(context){
    console.log(context);
    var sign = context.id;

    get("http://sandipbgt.com/theastrologer/api/horoscope/"+sign+"/today/").then(function(text) {
        hideAllSigns();
        var info = JSON.parse(text.response);
        console.log(info);
        var sunSign = document.getElementById("sunSign");
        sunSign.innerText = info.sunsign;
        var servCont = document.getElementById("serverContent");
        servCont.innerText = info.horoscope;
        var mood = document.getElementById("mood");
        mood.innerText = info.meta.mood;
    }, function(error) {
        console.log("Error!!!");
        console.log(error);
    });
    get("https://source.unsplash.com/user/erondu/700x300").then(function(text) {
        var img = document.getElementById("randomImg");
        img.src = text.responseURL;
    }, function(error) {
        console.log("Error!!!");
        console.log(error);
    });

    // var xhr = new XMLHttpRequest();
    // var url = "http://sandipbgt.com/theastrologer/api/horoscope/"+sign+"/today/";
    // xhr.open("GET", url, true);
    // xhr.onload = function(){
    //     hideAllSigns();
    //     var info = JSON.parse(xhr.responseText);
    //     console.log(info);
    //     var sunSign = document.getElementById("sunSign");
    //     sunSign.innerText = info.sunsign;
    //     var servCont = document.getElementById("serverContent");
    //     servCont.innerText = info.horoscope;
    //     var mood = document.getElementById("mood");
    //     mood.innerText = info.meta.mood;
    //     // https://source.unsplash.com/random
    //     var randomImage = new XMLHttpRequest();
    //     randomImage.open("GET", "https://source.unsplash.com/user/erondu/700x300", true);
    //     randomImage.onload = function(){
    //         var img = document.getElementById("randomImg");
    //         img.src = randomImage.responseURL;
    //       console.log(randomImage.responseURL);
    //     };
    //     randomImage.send();
    //
    // };
    // xhr.send();
}
function get(url) {
    return new Promise(function(succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.addEventListener("load", function() {
            if (request.status < 400)
                succeed(request);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function() {
            fail(new Error("Network error"));
        });
        request.send();
    });
}

function showAllSigns() {
    var secondaryContainer = document.getElementById("secondaryCont");
    secondaryContainer.style.display = "none";
    var mainContainer = document.getElementById("mainCont");
    mainContainer.style.display = "block";
    mainHeader.innerText = " Choose your Sunsign! ";
}
function hideAllSigns() {
    var secondaryContainer = document.getElementById("secondaryCont");
    secondaryContainer.style.display = "block";
    var mainContainer = document.getElementById("mainCont");
    mainContainer.style.display = "none";
    mainHeader.innerText= "You are lucky today!";
}
