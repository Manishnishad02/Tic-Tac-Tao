let boxes=document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset');

let turnO =true; //player X , player O

const winPattern=[
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked"); 
        if(turnO)
            {
            box.innerText = "O";
            turnO = false; //turn
            }
        else
        {
            box.innerText = "X";
            turnO = true; //turn
        }   
        box.disabled = true; 
        checkWinner();
    });
});
/* Logic of Game */

const checkWinner = () => {
    let winner = false;
    winPattern.forEach((win) => {
        const box0InnerText = boxes[win[0]].innerText;
        const box1InnerText = boxes[win[1]].innerText;
        const box2InnerText = boxes[win[2]].innerText;
        if (box0InnerText !== "" && box0InnerText === box1InnerText && box1InnerText === box2InnerText) {
            winner = true;
            win.forEach((index) => {
                boxes[index].style.backgroundColor = "lightgreen";
            });
        }
    });
    if (winner) {
        boxes.forEach((box) => {
            box.disabled = true;
        });
    }
}

/* Reset Button */

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "";
    });
    turnO = true;
});


 // JavaScript to show the instructions when clicked
 document.getElementById('showInstructions').addEventListener('click', function() {
    const instructionsContent = document.getElementById('instructionsContent');
    const developerContent = document.getElementById('developerContent');
    // Toggle visibility
    instructionsContent.style.display = instructionsContent.style.display === 'none' ? 'block' : 'none';
    developerContent.style.display = 'none'; // Hide Developer info when Instructions are shown
});

// JavaScript to show the developer profile when clicked
document.getElementById('showDeveloper').addEventListener('click', function() {
    const developerContent = document.getElementById('developerContent');
    const instructionsContent = document.getElementById('instructionsContent');
    // Toggle visibility
    developerContent.style.display = developerContent.style.display === 'none' ? 'block' : 'none';
    instructionsContent.style.display = 'none'; // Hide Instructions when Developer info is shown
});

