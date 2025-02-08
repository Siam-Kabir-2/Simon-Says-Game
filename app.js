let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let highScore=0;

let h2=document.querySelector("h2");

// document.addEventListener("keypress",function(){
//     if(started == false){
//         console.log("game started");
//         started=true;
//         setTimeout(levelUp,400);
//     }
// });

let strBtn=document.querySelector(".strt");

strBtn.addEventListener("touchstart",function(){
    if(started == false){
        console.log("game started");
        started=true;
        setTimeout(levelUp,400);
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000/4);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },1000/4);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randInd=Math.floor(Math.random()*4);
    let randColor=btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randInd);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log(`Level ${level}`);
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        highScore=Math.max(highScore,level);
        h2.innerHTML=`Game Over! <br> Your score : <b>${level}</b> <br> Highest Score : ${highScore} <br>  Press Start to start again!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgba(179, 249, 255, 0.517)";
        },250);
        resetGame();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function resetGame(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}