  let title = document.getElementById("title");
            title.textContent = "eiei";
            let message = document.getElementById("message");
            let time = 0;
            let interval = setInterval(function(){
                time++;
                message.textContent = time+"sec";

            },1000);
            let stop = document.getElementById("stop");
            stop.addEventListener("click",function(){

                clearInterval(interval);
            });