dice1=createRand();
dice2=createRand();

src1="images/dice" + dice1 + ".png";
src2="images/dice" + dice2 + ".png";
document.getElementById("img1").src = src1;
document.getElementById("img2").src = src2;

if(dice2 > dice1)
{
  result="Player 2 wins";
} else if (dice1 > dice2 )
{
  result="Player 1 wins";
}else {
  result="Draw";
}
document.querySelector("h1").innerHTML=result;
function createRand()
{
  x=Math.random();
  x=Math.floor(x*6)+1;
  return x;
}
