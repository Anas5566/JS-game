var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var culture = "";
  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    culture += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pabtm").innerHTML = culture;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else{
       clearInterval(timerint);
       document.querySelector("#pabtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pabtm").addEventListener("click", function(dets){
var clickDoucm = Number(dets.target.textContent);
if(clickDoucm === hitrn){
  increaseScore();
  makeBubble();
  getNewHit();
 
}
});

makeBubble();
runTimer();
getNewHit();

