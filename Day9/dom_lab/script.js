let food = document.getElementById("fruit");

let breakfast = document.getElementsByClassName("breakfast");

let allFood = document.getElementsByTagName("li");

let fruit = document.querySelector("#fruit"); // Returns the *first* item matching the criteria

let fruits = document.querySelectorAll("h1");

food.style.color = "blue";


let sampleInput = document.getElementById("sampleInput");
sampleInput.setAttribute("type", "password");

function initializeGame(){
    const numberOfColumns = 4;
    const numberOfRows = 4;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // Shuffle the array
    const shuffledNumbers = shuffleArray(numbers);

    let numberIndex = 0;
    for(let i = 0; i < numberOfColumns; i++){
        for(let j = 0; j < numberOfRows; j++){
            if(numberIndex < 16){
                let btnId = "btn" + i + "-" + j;
                let tempBtn = document.getElementById(btnId);
                tempBtn.textContent = shuffledNumbers[numberIndex];
                tempBtn.setAttribute("value", shuffledNumbers[numberIndex]);
                tempBtn.addEventListener("click", (e) => {
                    moveBtn(tempBtn);
                });
            }
            numberIndex++;
        }
    }

    document.getElementById("btn3-3").style.opacity = 0;
}

// Function to shuffle an array using the Fisher-Yates algorithm --> Pulled from the internets.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function moveBtn(btnClicked){
    let tempBtn;
    let [row, column] = btnClicked.getAttribute("id").match(/\d+/g).map(Number);


    if(row - 1 > -1){ // Verify button on top.
        tempBtn = document.getElementById("btn"+(row-1)+"-"+column);

        if(tempBtn.getAttribute("isVisible") == "false"){
            tempBtn.textContent = btnClicked.textContent
            tempBtn.style.opacity = 1;
            tempBtn.setAttribute("isVisible", "true");

            btnClicked.style.opacity = 0;
            btnClicked.setAttribute("isVisible", "false");
            return ;
        }
    }

    if(column + 1 < 4){ // Verify button on right.
        tempBtn = document.getElementById("btn"+(row)+"-"+(column+1));

        if(tempBtn.getAttribute("isVisible") == "false"){
            tempBtn.textContent = btnClicked.textContent
            tempBtn.style.opacity = 1;
            tempBtn.setAttribute("isVisible", "true");

            btnClicked.style.opacity = 0;
            btnClicked.setAttribute("isVisible", "false");
            return ;
        }
    }

    if(row + 1 < 4){ // Verify button on bottom.
        tempBtn = document.getElementById("btn"+(row+1)+"-"+column);
        if(tempBtn.getAttribute("isVisible") == "false"){
            tempBtn.textContent = btnClicked.textContent
            tempBtn.style.opacity = 1;
            tempBtn.setAttribute("isVisible", "true");

            btnClicked.style.opacity = 0;
            btnClicked.setAttribute("isVisible", "false");
            return ;
        }
    }

    if(column - 1 > -1){ // Verify button on left.
        tempBtn = document.getElementById("btn"+(row)+"-"+(column-1));

        if(tempBtn.getAttribute("isVisible") == "false"){
            tempBtn.textContent = btnClicked.textContent
            tempBtn.style.opacity = 1;
            tempBtn.setAttribute("isVisible", "true");

            btnClicked.style.opacity = 0;
            btnClicked.setAttribute("isVisible", "false");
            return ;
        }
    }

}

initializeGame();