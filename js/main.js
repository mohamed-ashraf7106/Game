let char = document.getElementById("char");
let topd = 20;
let left = 100;
let scorenum = 0;
let score = document.createElement("p");
let query = window.matchMedia("(max-width:767px)").matches;
let width = 150;
if (query) {
  width = 100
}
score.classList.add("score");
document.body.appendChild(score);
setInterval(() => {
  score.innerHTML = `score : ${scorenum}`;
  scorenum += 1;
}, 200);
let topipe = 0;
let move = "";
function createpipe(){
  left = 100;
  topipe = 20 + Math.floor(Math.random() * 50);
  move = document.querySelector(".pipe");
  let pipeParent = document.createElement("div");
  pipeParent.classList.add("pipe");
  for (let i = 0; i < 2; i++) {
    let pipe = document.createElement("div");
    pipe.classList.add("child");
    if (i == 0) {
      pipe.style.cssText = `background-color:green;height:${topipe}%`;
    } else {
      pipe.style.cssText = `background-color:green;height:100%`;
    }
    pipeParent.appendChild(pipe);
  }
  document.body.appendChild(pipeParent);
}
createpipe()
setInterval(() => {
  move = document.querySelector(".pipe");
  if (!move) {
    return;
  }
  move.style.cssText = `left:${left}%`;
  left -= 1;
  if (move.offsetLeft <= -width) {
    console.log(move.offsetLeft);
    move.remove();
    createpipe()
  }
}, 20);
let x = 0.7;
let y = 10;
let offset = 0;
if (query) {
  offset = -90;
  x = 1;
  y = 12
}else{
  offset = -130
}
setInterval(() => {
  let child = document.querySelectorAll(".child");
  if (!move || !child) {
    return;
  }
  if (move.offsetLeft < 120 && move.offsetLeft > offset) {
    if (
      child[1].offsetTop <= char.offsetTop + char.offsetHeight ||
      char.offsetTop <= child[0].offsetHeight
    ) {
      if (move.offsetLeft != 0) {
        lost();
      }
    }
  }
}, 20);
setInterval(() => {
  if (topd >= 100 || topd <= -10) {
    lost();
  }
  topd += x;
  char.style.cssText = `top:${topd}%`;
}, 30);
document.addEventListener("keydown", () => {
  topd -= y;
  char.style.cssText = ` top:${topd}% `;
});
document.addEventListener("click", () => {
  topd -= y;
  char.style.cssText = ` top:${topd}% `;
});
function lost() {
  let p = document.createElement("p");
  document.body.innerHTML = "";
  p.innerHTML = `score: ${scorenum} <br> Good Job`;
  document.body.appendChild(p);
  let btn = document.createElement("button");
  btn.innerHTML = "again";
  btn.style.cssText = `margin:10px 50%; transform:translateX(-50%)`;
  document.body.appendChild(btn);
  btn.addEventListener("click",()=>{
    window.location.reload()
    console.log("ho");
  })
  p.style.cssText = "text-align:center;margin-top:100px;";
  clearInterval(0);
  clearInterval(1);
  clearInterval(2);
  clearInterval(3);
  clearInterval(4);
  clearInterval(5);
}
