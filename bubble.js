var time = 60;
var scores = 0;
var hint = 5;

function showBubble() {
    var bubblevalue = "";
    for (var i = 1; i <= 132; i++) {
        var rn = Number(Math.floor(Math.random()*10));
        bubblevalue += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtom").innerHTML = bubblevalue;
}


function timmer() {
    var timmerint = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#timevalue").textContent = time;
        }
        else {
            clearInterval(timmerint);
            document.querySelector("#pbtom").innerHTML = '<h1> Game Over!!!</h1>';
        }
    }, 1000);
}

function getHint(){
    hint = Math.floor(Math.random()*10);
    document.querySelector("#newhint").textContent = hint;
}

document.querySelector("#pbtom").addEventListener("click",function(details){
    var clicknumber = Number(details.target.textContent);
    if(clicknumber === hint){
        scores += 10;
        document.querySelector("#score").textContent = scores;
        showBubble();
        getHint();
    }
    else{
        document.querySelector("#pbtom").innerHTML = '<h1> Not Match , Try Again!!!</h1>';
    }
})
showBubble();
getHint();
timmer();
