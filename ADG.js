var max = 90;
var hitscore = 1111;
var  score = 0;
localStorage.setItem('test', 0);
let topm = [0,100 ,0,0,0,0,0,0,0,0]



setTimeout(document.getElementById("score").innerHTML = score, 0100);

setInterval(scoreboost , 9999);
function scoreboost(){
    if (max > 1) {max = max - 10;}

}
function mina(){
    score = score + (hitscore * max);
 document.getElementById("score").innerHTML = score;

}
 // document.getElementById("score").innerHTML = min;
 // setInterval(min= min+1 , 0100);
 // setInterval(  document.getElementById("score").innerHTML = min, 0150);





