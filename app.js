let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let btnClicked = false;
let para = document.querySelector(".announce");

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((btn) => { 
    btn.addEventListener("click",() => {
        if(btnClicked == false){
            btn.innerText = "o";
            btnClicked = true;
        }else {
            btn.innerText = "x";
            btnClicked = false;
        }
        btn.disabled = true;

        checkWinner();
    })
})

function checkWinner(){
    for (pattern of winPatterns){
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value == pos2value && pos2value == pos3value){
                if(pos1value == "x" && pos2value == "x" && pos3value == "x"){
                    para.innerText = "X is the Winner!!";
                    boxes.forEach((btn) => {
                        btn.disabled = true;
                    })
                }else{
                    para.innerText = "O is the Winner!!";
                    boxes.forEach((btn) => {
                        btn.disabled = true;
                    })
                }
            }
        }
    }
}

reset.addEventListener("click",() => {
    para.innerText = "";
    boxes.forEach((btn) => {
        btn.innerText = "";
        btnClicked = false;
        btn.disabled = false;
    })
})
