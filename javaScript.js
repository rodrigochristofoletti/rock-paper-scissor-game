
const paper = document.getElementById('paperChoice');
const rock = document.getElementById('rockChoice');
const scissor = document.getElementById('scissorChoice');
const res = document.getElementById('result');
const userImg = document.getElementById('user-Img');
const botImg = document.getElementById('bot-img');
const resetBtn = document.getElementById('resetButton');

const userSpan = document.getElementById('userspan');
const botSpan = document.getElementById('botspan');
let userPoints = 0;
let botPoints = 0;

const botChoices = [
    { name: "rock", img: "./assets/stone.png" },
    { name: "paper", img: "./assets/paper.png" },
    { name: "scissors", img: "./assets/scissor.png" }
  ];

const paperPlayed = () => {
    userImg.src = "./assets/paper.png";
    const botChoice = getRandomBotChoice();
    botImg.src = botChoice.img;

    if (botChoice.name === "scissors") {
        res.innerHTML = "You lost";
        botPoints++;
        botSpan.innerHTML = botPoints;
    } else if (botChoice.name === "paper") {
        res.innerHTML = "It is a draw"
    } else {
        res.innerHTML = "You won"
        userPoints++;
        userSpan.innerHTML = userPoints;
    }
};

function rockPlayed() {
    userImg.src = "./assets/stone.png";
    const botChoice = getRandomBotChoice();
    botImg.src = botChoice.img;

    if (botChoice.name === "paper") {
        res.innerHTML = "You lost"
        botPoints++;
        botSpan.innerHTML = botPoints;
    } else if (botChoice.name === "rock") {
        res.innerHTML = "It is a draw"
    } else {
        res.innerHTML = "You won"
        userPoints++;
        userSpan.innerHTML = userPoints;
    }
};


const scissorPlayed = () => {
    userImg.src = "./assets/scissor.png";
    const botChoice = getRandomBotChoice();
    botImg.src = botChoice.img;

    if (botChoice.name === "rock") {
        res.innerHTML = "You lost"
        botPoints++;
        botSpan.innerHTML = botPoints;
    } else if (botChoice.name === "scissors") {
        res.innerHTML = "It is a draw"
    } else {
        res.innerHTML = "You won"
        userPoints++;
        userSpan.innerHTML = userPoints;
    }
};

;

const getRandomBotChoice = () => {
    const randomIndex = Math.floor(Math.random() * botChoices.length);
    return botChoices[randomIndex];
  };


const reset = () => {
    botSpan.innerHTML = 0;
    userSpan.innerHTML = 0;
    res.innerHTML = "";
    botImg.src = "./assets/stone.png";
    userImg.src = "./assets/stone.png"
}


paper.addEventListener("click", paperPlayed);
rock.addEventListener("click", rockPlayed);
scissor.addEventListener("click", scissorPlayed);
resetBtn.addEventListener("click", reset);