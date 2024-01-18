// Tic Tac Toe Game 

let boxes =document.querySelectorAll(".box"); // all is used here !!

let resetbtn =document.querySelector("#reset-btn");

let newGameBtn =document.querySelector("#new-game-btn");

let msgContainer =document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO =true ;//player x, player o

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
