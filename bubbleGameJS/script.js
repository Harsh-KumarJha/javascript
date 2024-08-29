var timer=60;
var score=0;
var hit ;
function generateNewHit(){
    var newHit = Math.floor(Math.random()*10);
    document.querySelector("#Hitelem").textContent = newHit;
    hit = newHit;
}

function timerCount(){
    var interval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(interval);
            const pbtmElement = document.querySelector(".pbtm");
            pbtmElement.style.flexDirection = "column"; 
            pbtmElement.innerHTML = `
                <h1>Game Over</h1>
                <h2>Your Score: ${score}</h2>
            `;


        }
    },1000);
}

function createBubble(){
var clu = "";
for ( var i=0 ; i<84 ; i++ ){
    let a = Math.floor(Math.random()*10);
    clu += `<div class="bubble">${a}</div>`;
}

document.querySelector(".pbtm").innerHTML = clu;
}

function incrScore(){
    score += 10;
    document.querySelector("#score").textContent = score ;
}

function decrScore(){
    score -= 10;
    document.querySelector("#score").textContent = score ;
}

document.querySelector(".pbtm").addEventListener("click" , function(dets){
    var a = Number(dets.target.textContent);
    if(timer>0){
        if(a === hit ){
            incrScore();
        }else{
            decrScore();
        }

        generateNewHit();
        createBubble();
}
})


generateNewHit();
createBubble();
timerCount();