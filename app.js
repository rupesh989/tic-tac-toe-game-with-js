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

boxes.forEach((box) => {

    // console.log(element);
        box.addEventListener("click",()=>{
            // console.log("box was clicked");
            // box.innerText="asdf";

            if (turnO){
                box.innerText="O";
            //  box.classList.remove("box");
            //  box.classList.add(".xval");
                turnO=false;                
            }
            else{
                box.innerText="X";
             // box.classList.add(".xval");
             // box.classList.remove("box");
                turnO=true;                
            }
            box.disabled =true;

            checkWinner();
        });
});  

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes =() =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`" ${winner} " is Winner, Congratulations`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// const showDraw=(draw)=>{
//     msg.innerText=`" ${draw} " is Draw, play agian`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };

const checkWinner=()=>{
    for (let pattern of winPatterns){

            let pos1val=boxes[pattern[0]].innerText;    
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
        
            if (pos1val != "" &&
                pos2val != "" &&
                pos3val != "" )

                    if (pos1val === pos2val &&
                        pos2val === pos3val){

                        // console.log("winner",pos1val);
                        showWinner(pos1val);
                    }
                else{
                        // console.log("lose"); 
                        //showDraw();
                    }    
    };
};

newGameBtn.addEventListener("click",resetGame);
  resetbtn.addEventListener("click", resetGame);
