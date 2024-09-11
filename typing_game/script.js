const timerInterval = 500; // milliseconds
let timerId = setInterval(engine, timerInterval);

const typingTestParagraphs = [
"The quick brown fox jumps over the lazy dog. This classic sentence contains every letter of the English alphabet and is often used to demonstrate typewriters and computer keyboards. It is a great way to assess typing speed and accuracy. By practicing with this sentence, you can improve your typing skills and become more proficient at handling various types of text. Remember to keep your fingers on the home row and maintain a steady rhythm as you type. Consistent practice can lead to significant improvements over time."
];

let PARAGRAPH_COUNTER = 0;

function initializeGame(){
    stopGame();

    PARAGRAPH_COUNTER = 0;

    const numberOfColumns = 4;
    const numberOfRows = 4;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // Shuffle the array
    const shuffledNumbers = shuffleArray(numbers);

    let numberIndex = 0;
    for(let i = 0; i < numberOfColumns; i++){
        for(let j = 0; j < numberOfRows; j++){
            let btnId = "btn" + i + "-" + j;
            let tempBtn = document.getElementById(btnId);
            tempBtn.textContent = shuffledNumbers[numberIndex];
            tempBtn.setAttribute("value", shuffledNumbers[numberIndex]);
            tempBtn.setAttribute("isVisible", "false");
            tempBtn.setAttribute("isBlocked", "false");
            tempBtn.style.opacity = 0;

            numberIndex++;
        }
    }
    startGame();
}

// Function to shuffle an array using the Fisher-Yates algorithm --> Pulled from the internets.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function engine() {
    // Usage
    const randomColumn = getRandomInt(0, 3);
    const randomRow = getRandomInt(0, 3);

    let btnId = "btn" + randomColumn + "-" + randomRow;
    let tempBtn = document.getElementById(btnId);

    console.log(tempBtn.getAttribute("isVisible"));

    if(tempBtn.getAttribute("isVisible") == "true") {
        let foundInvisible = false;
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                btnId = "btn" + i + "-" + j;
                tempBtn = document.getElementById(btnId);

                if(tempBtn.getAttribute("isVisible") == "false") {
                    foundInvisible = true;
                    break
                }
            }
            if(foundInvisible)
                break;
        }
    }

    if(tempBtn.getAttribute("isVisible") == "true"){
        stopGame();
        alert("You have lost. Press OK to restart");
        initializeGame();
    }
    else{

        tempBtn.innerHTML = ''; // Clear any existing content
        let word = getWordAtIndex(typingTestParagraphs[0], PARAGRAPH_COUNTER)

        // Create a span for each letter and add it to the container
        word.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter');
            tempBtn.appendChild(span);
        });

        tempBtn.setAttribute("isVisible", "true");
        tempBtn.style.opacity = 1;

        PARAGRAPH_COUNTER++;
}
}

function startGame(){
    timerId = setInterval(engine, timerInterval);
}

function stopGame(){
    clearInterval(timerId);
}

// Generate a random integer between 0 and 3 (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get the word at a specific index
function getWordAtIndex(paragraph, index) {
    // Split the paragraph into words using a regular expression to handle punctuation
    const words = paragraph.split(/\s+/).filter(word => word.length > 0);

    // Access the word at the specified index
    return words[index] || 'Index out of range'; // Handle cases where index is out of bounds
}

function handleKeyDown(event) {
    // `event` contains information about the keyboard event
    console.log('Key pressed:', event.key); // Logs the key pressed

    let btnId = "";

    // Array to collect all letters in the letter container
    //let allLetters = [];

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            btnId = "btn" + i + "-" + j;
            let querySelector = "#"+btnId + " .letter";

            const letter = event.key.toLowerCase(); // Convert to lowercase for comparison
            const letters = document.querySelectorAll(querySelector);

            // Loop through each letter and highlight if it matches the pressed key
            for(let i = 0; i < letters.length; i++){
                if (letters[i].textContent.toLowerCase() === letter && i == 0){
                    letters[i].classList.add('highlight');
                }
                else if (i > 0 && letters[i].textContent.toLowerCase() === letter && letters[i-1].classList.contains('highlight'))
                    letters[i].classList.add('highlight');
            }
            
            // letters.forEach(span => {
            //     if (span.textContent.toLowerCase() === letter) {
            //         span.classList.add('highlight');
            //     }
            // });
            const allHighlighted = Array.from(letters).every(span => span.classList.contains('highlight'));
            console.log(allHighlighted);

            if (allHighlighted) {
                console.log('All letters have been highlighted.');
                let tempBtn = document.getElementById(btnId);
                tempBtn.innerHTML = ''; // Clear any existing content
                tempBtn.setAttribute("isVisible", "false")
                tempBtn.style.opacity = 0;
            }
        }
    }

}

// Add event listener for 'keydown' events on the document
document.addEventListener('keydown', handleKeyDown);

initializeGame();