const Timer = document.querySelector(".Timer");
var timer = [0, 0, 0, 0];
let maxTimer;

function leadingzero(time){
  if(time <= 9){
    time = "0" + time;
  }
  return time;
}

function runtimer(){
  let currenttime =
  leadingzero(timer[0]) + ":" +
  leadingzero(timer[1]) + ":" +
  leadingzero(timer[2]);

  Timer.innerHTML = currenttime;

  timer[3]++;

  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);

}

function startTimer(){
  clearInterval(maxTimer);
  maxTimer = setInterval(runtimer, 10);
}

function stopTimer(){
  clearInterval(maxTimer);
}

function resetTimer(){
  clearInterval(maxTimer);
  timer = [0, 0, 0, 0];
  Timer.textContent = "00:00:00";
}

const ull = document.querySelector(".ull");

document.querySelector("#starT").addEventListener("click" , startTimer);
document.querySelector("#maX").addEventListener("click", stopTimer);
document.querySelector("#reseT").addEventListener("click", resetTimer);
