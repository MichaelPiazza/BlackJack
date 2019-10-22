var winningScore = 21;
var gameOver = false;
var playerScore = 0;
var scoreDisplay = document.querySelector("#scoreDisplay");
var addBtn = document.querySelector("#addBtn");
var reset = document.querySelector("#reset");
scoreDisplay.textContent = playerScore;

addBtn.addEventListener("click", function() {
    //generate random number
    var ranNum = generateRandomNum(playerScore);
    //console.log(ranNum);
    if(!gameOver) {
        playerScore += ranNum;
        if(playerScore > winningScore) {
            document.getElementById("square").style.backgroundColor = "red";
            document.querySelector(".title1").style.backgroundColor = "red";
            document.querySelector(".title2").style.backgroundColor = "red";
            gameOver = true;
        }
    if(playerScore === winningScore) {
            console.log("You Win!");
            gameOver = true;
            document.getElementById("square").style.backgroundColor = "green";

        }
        scoreDisplay.textContent = playerScore;
    } 
});

reset.addEventListener("click", function() {
    playerScore = 0;
    document.getElementById("square").style.backgroundColor = "white";
    scoreDisplay.textContent = playerScore;
    console.log(playerScore);
    gameOver = false;
    document.querySelector(".title").style.backgroundColor = "#42bcf4";
    lose.textContent = "";
});

function generateRandomNum(num) {
    return Math.floor(Math.random() * 13) + num;
} 