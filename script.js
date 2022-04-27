'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20;
let highscore=0;

var  displayMsg =function (message){
    document.querySelector('.message').textContent=message;
}

var displayNum = function (number){
    document.querySelector('.number').textContent=number;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess); 

    if (!guess){
       displayMsg("No Number..!"); 
    } 
// when playere wins
    else if(guess===secretNumber) {
    displayMsg("Correct Number..!!");
    displayNum(secretNumber);
    var body =document.querySelector('body');
    body.style.backgroundColor="green";
    document.querySelector('.number').style.width='30rem'

    if (score > highscore){
     highscore=score;
     document.querySelector('.highscore').textContent=highscore;
    }
    }

    else if(guess !== secretNumber){
         
            if(score > 1){
              
                displayMsg(guess > secretNumber ? "guess is too high..!!" :"guess is too low..!!");
                score--;
                document.querySelector(".score").textContent=score;
            }else{
               displayMsg("You loose,Better luck nxt time..!!"); 
                document.querySelector(".score").textContent=0;
            }    
   }
})

document.querySelector('.again').addEventListener('click',function(){

    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMsg("Start GUessing..!!");
    document.querySelector(".score").textContent=score;
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value="";
    var body =document.querySelector('body');
    body.style.backgroundColor="#222"
    document.querySelector('.number').style.width='15rem'
})