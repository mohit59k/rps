var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getcomputerChoice(){
  const choices = ['r','p','s'];
  const randomNumber = (Math.floor(Math.random()*3));
  //console.log(randomNumber);
  return choices[randomNumber];
}
//console.log(getcomputerChoice());
function convertTOword(letter){
  if(letter==="r") return "Rocks";
  if(letter==="p") return "Paper";
  else return "Scissor";
}
function win(user,computer){
  userScore++;
  userScore_span.innerHTML=userScore;
  const smalluserWord = "user".fontsize(2).sub();
  const smallcompWord = "comp".fontsize(2).sub();
  result_p.innerHTML = convertTOword(user)+smalluserWord+"beats "+convertTOword(computer)+smallcompWord+". YOU WINS!!!";
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 350);
};

function lose(user,computer){
  computerScore++;
  computerScore_span.innerHTML=computerScore;
  const smalluserWord = "user".fontsize(2).sub();
  const smallcompWord = "comp".fontsize(2).sub();
  result_p.innerHTML = convertTOword(user)+smalluserWord+"loses to "+convertTOword(computer)+smallcompWord+". YOU LOST!!!";
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 350);
};

function draw(user,computer){
  const smalluserWord = "user".fontsize(2).sub();
  const smallcompWord = "comp".fontsize(2).sub();
  result_p.innerHTML = convertTOword(user)+smalluserWord+"equals "+convertTOword(computer)+smallcompWord+". IT's A DRAW!!!";
  document.getElementById(user).classList.add('yellow-glow');
  setTimeout(function(){document.getElementById(user).classList.remove('yellow-glow')}, 350);
};

function game(userChoice){
  const computerChoice=getcomputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
    win(userChoice,computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice,computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice,computerChoice);
    break;
  }
};

function main() {
  rock_div.addEventListener('click',function(){
    game('r');
  });
  paper_div.addEventListener('click',function(){
    game('p');
  });
  scissor_div.addEventListener('click',function(){
    game('s');
  });
};
main();
