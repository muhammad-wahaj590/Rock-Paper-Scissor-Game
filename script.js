let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const opIndex = Math.floor(Math.random() * 3);
    return option[opIndex];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerHTML = "Game was draw. Play again."
    msg.style.backgroundColor = "#3B1F2B"
    msg.style.color = "#DBDFAC"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "#48AD72"
        msg.style.color = "#04030F"
    }else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You lost ${userChoice} beats your ${compChoice}`
        msg.style.backgroundColor = "#D0253E"
        msg.style.color = "#04030F"
    }
}

const playGame = (userChoice)=>{
    // generate user choice 
    console.log("User choice = ", userChoice);

    // generate computer choice 
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    // draw game 
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper 
            userWin =  compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // scissor, rock 
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // user has scissors
            // comp has rock, paper 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})



