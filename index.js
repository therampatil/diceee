// // For First Dice
var randomNum1 = (Math.floor(Math.random()*6))+1;
function getImage(diceNum,randumNum1){
    document.querySelector(".img"+diceNum).setAttribute("src","images/dice"+randumNum1+".png");
}
getImage(1,randomNum1)

// // For Second Dice
var randomNum2 = (Math.floor(Math.random()*6))+1;
function getImage(diceNum,randumNum2){
    document.querySelector(".img"+diceNum).setAttribute("src","images/dice"+randumNum2+".png");
}
getImage(2,randomNum2)

// Winner Announcement
if(randomNum1>randomNum2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Player 1 wins "
};
if(randomNum1<randomNum2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Player 2 wins "
};
if(randomNum1===randomNum2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Draw"
};