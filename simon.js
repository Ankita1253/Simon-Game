let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

// let btn=document.querySelector("btn");
let h2 = document.querySelector("h2");

//1.  let's start the game:
// for starting the game with any key press we'll add events to the whole document.
document.addEventListener("keypress", function () {
    // console.log("game started");

    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();   // GAME WAS STARTED NOW LEVEL UP IT:
    }
});

//LEVEL UP : level value update krna hai , button ko flash karwana hai , backgound color change krna hai, h2 ki value bhbi change karna hai

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

//when user click and button get flash:

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose/ random color generate:

    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    // push the color sequence to the gameseq array:
    gameseq.push(randcolor);
    console.log(gameseq);

    console.log(randidx);
    console.log(randcolor);
    console.log(randbtn);
    gameflash(randbtn);

}

// lets make function which do all work after pressing the button:

function btnpress() {
    let btn = this; //jis button ko press krenge vo hi display hoga.
    console.log(this);

    //

    userflash(btn); //jis button pe click krenge vo flash hoga pr ye green color me hoga qki user is flashing it.
    usercolor = btn.getAttribute("id");
    console.log(usercolor);

}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

