let click = 0;
let messageBox = document.getElementById("message");
let gameStart = false;
let timeStart = 0;
let timeLimit = 5000;
let time = document.getElementById("timer");
let interval = 
window.addEventListener("click",onClick);

function onClick(){

    click++;
    message.textContent = click;
    if(!gameStart){
        timeStart = new Date().getTime();
        gameStart = true;
        startTimer();
    }

}
function startTimer(){
 interval = setInterval(function(){
    let currentTime = new Date().getTime();
    let timeDiff = (timeLimit + timeStart) - currentTime;
    if(timeDiff < 0){
        clearInterval(interval);
        timeDiff = 0;
        window.removeEventListener('click',onClick);
    }
    timer.textContent = `เหลือเวลาอยู่ ${(timeDiff/1000).toFixed(1)} sec`;


},100)



}
