let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "green", "blue"];


let start = false;
let level = 0;
// let btn=document.querySelector("btn");
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game is started");
        start = true;
        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function checklevel(idx) {
    console.log("current level :", level);

    // let idx = level - 1;

    if (userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length ){
            setTimeout(levelUp(), 1000);
        }
        console.log("same value");
    } else {
       h2.innerHTML=`Game Over!! and your SCORE is ${level} <br> press any key to reset the game`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="red";
       },1000);
     reset();
    }
}


function levelUp() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);


    checklevel()

}


function btnpress() {
    console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    console.log(userseq);

    checklevel(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset(){
    start=false;
    userseq=[];
    gameseq=[];
    level =0;
}