document.addEventListener('DOMContentLoaded', function() {
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let text1 = "./images/dice" + a + ".png";
    let text2 = "./images/dice" + b + ".png";
    document.getElementById('p1-img').src = text1;
    document.getElementById('p2-img').src = text2;
    if(a==b){
        document.getElementById('headtext').innerHTML="DRAW";
    }
    else if(a>b){
        document.getElementById('headtext').innerHTML="Player 1 Wins";
    }
    else{
        document.getElementById('headtext').innerHTML="Player 2 Wins ";
    }
});