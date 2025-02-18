let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");

const msj = document.querySelector("#msj");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
}
const drawGame = () =>{
    console.log("game is draw");
    msj.innerText = "Draw";
    msj.style.backgroundColor ="#081b31";
};
const showWinner = (userwin, compchoice, userChoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win")
        msj.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msj.style.backgroundColor ="green"; 
    }else{
        console.log("you loose");
        compScore++;
        compScorepara.innerText = compScore;
        msj.innerText = `You Lost ${compchoice} beats YOur ${userChoice}`;
        msj.style.backgroundColor ="red";
    }

}

const playGame = (userChoice) => {
    let compchoice = genCompChoice();
    if(userChoice===compchoice){
        drawGame();}
        else{
            let userwin = true;
            if(userChoice==="rock")
            {
                userwin = compchoice === "paper" ? false : true;
            }else if(userChoice === "paper")
            {
                userwin = compchoice === "scissors"? false : true;
            }
            else{
                userwin = compchoice === "rock"? false : true;
            }
            showWinner(userwin, compchoice, userChoice); 
        }
}
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});