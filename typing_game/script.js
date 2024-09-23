const timerInterval = 10; // milliseconds
let timerId = setInterval(engine, timerInterval);

const typingTestParagraphs = [
"Type the words as fast as you can. Do not let the container fill up. :)",
"The quick brown fox jumps over the lazy dog. This classic sentence contains every letter of the English alphabet and is often used to demonstrate typewriters and computer keyboards. It is a great way to assess typing speed and accuracy. By practicing with this sentence, you can improve your typing skills and become more proficient at handling various types of text. Remember to keep your fingers on the home row and maintain a steady rhythm as you type. Consistent practice can lead to significant improvements over time.",
"The gentle breeze rustles through the tall, verdant grass. This serene scene captures the essence of nature's tranquility and is often used to evoke a sense of peace and relaxation. Observing this natural beauty can be a wonderful way to relieve stress and connect with the environment. By immersing yourself in such moments, you can foster a deeper appreciation for the outdoors and enhance your overall well-being. Remember to take a deep breath and fully engage your senses as you enjoy the surroundings. Consistent moments of mindfulness in nature can lead to greater mental clarity and inner calm.",
"Bright stars twinkle in the vast night sky. This captivating view highlights the beauty of the cosmos and is often used to inspire wonder and curiosity about the universe. Stargazing is a wonderful way to gain perspective on our place in the world and deepen your understanding of astronomy. By observing celestial events and constellations, you can expand your knowledge of the night sky and develop a greater appreciation for its mysteries. Remember to use a telescope for a closer look and keep a stargazing journal to track your discoveries. Regularly exploring the stars can lead to fascinating insights and a profound sense of connection to the universe.",
"Golden leaves drift gently to the ground as autumn unfolds its vibrant colors. This picturesque scene embodies the essence of the changing seasons and is often used to evoke a sense of nostalgia and warmth. Observing the fall foliage can be a delightful way to appreciate the beauty of nature and reflect on the passage of time. By taking walks through wooded paths and enjoying the crisp air, you can deepen your connection to the natural world and enhance your sense of tranquility. Remember to dress warmly and bring a camera to capture the stunning landscapes. Regular outings during this season can lead to memorable experiences and a renewed appreciation for the cycle of nature."
];

let selectedParagraph = 0;
let WORDS = typingTestParagraphs[selectedParagraph].split(" ");

let PARAGRAPH_COUNTER = 0;
let HELPER_COUNTER = 0;
let VISIBLE_SPEED = 0; 
let SELECTED_SPEED = 100; // How many times 'timeInterval' has to pass to show a new game button. 100 = every second.

let helperIsSelected = true;
let helperHighlited = false;

const numberOfColumns = 8;
const numberOfRows = 5;
let visibleCount = 0;

function setup() {
    let setupCounter = 0;

    for(let i = 0; i < numberOfColumns; i++){
        for(let j = 0; j < numberOfRows; j++){
            let btnId = "btn" + i + "-" + j;
            //let tempBtn = document.getElementById(btnId);
            let tempBtn = document.createElement("div");
            tempBtn.classList.add("gameBtn2");
            tempBtn.classList.add("fade-in");
            tempBtn.classList.add("visible");
            tempBtn.setAttribute("id", btnId);
            tempBtn.setAttribute("isVisible", "false");

            

            let puzzleContainer = document.getElementById("puzzleContainer");
            puzzleContainer.appendChild(tempBtn);

            let word = getWordAtIndex(typingTestParagraphs[selectedParagraph], setupCounter++);

            if(word){
                // Create a span for each letter and add it to the container
                word.split('').forEach(letter => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.classList.add('letter');
                    tempBtn.appendChild(span);
                });

                visibleCount++;
                tempBtn.setAttribute("isVisible", "true");
                tempBtn.setAttribute("value", word);
            }
            
        }
        console.log("visibleCount =  "+ visibleCount);
        if(visibleCount >= typingTestParagraphs[selectedParagraph].length - 1)
            break;
    }
}

function initializeGame(){
    stopGame();

    SELECTED_SPEED = document.getElementById("speedSelector").value * 1;

    PARAGRAPH_COUNTER = 0;
    HELPER_COUNTER = 0;
    VISIBLE_SPEED = 10;

    selectedParagraph = getRandomIntegerInclusive(typingTestParagraphs.length - 1);
    if(selectedParagraph == 0)
        selectedParagraph++;

    //selectedParagraph = 0;
    WORDS = typingTestParagraphs[selectedParagraph].split(" ");

    helperIsSelected = false;
    helperHighlited = false;

    visibleCount = 0;

    for(let i = 0; i < numberOfColumns; i++){
        for(let j = 0; j < numberOfRows; j++){
            let btnId = "btn" + i + "-" + j;
            let tempBtn = document.getElementById(btnId);

            tempBtn.setAttribute("value", "");
            tempBtn.setAttribute("isVisible", "false");
            tempBtn.setAttribute("isBlocked", "false");
            tempBtn.classList.remove("gameBtnHighlight");
            tempBtn.classList.remove("fade-in");
            tempBtn.classList.remove("visible");
            tempBtn.style.opacity = 0;
            tempBtn.classList.add("fade-in");
        }
    }
    document.getElementById("startBtn").blur();
    startGame();
}

function engine() {
    VISIBLE_SPEED++;
    let foundInvisible = false;
    if(VISIBLE_SPEED >= SELECTED_SPEED){
        VISIBLE_SPEED = 0;

        // Usage
        const randomColumn = getRandomInt(0, numberOfColumns-1);
        const randomRow = getRandomInt(0, numberOfRows-1);

        let btnId = "btn" + randomColumn + "-" + randomRow;
        let tempBtn = document.getElementById(btnId);

        if(tempBtn.getAttribute("isVisible") == "true") {
            for(let i = 0; i < numberOfColumns; i++){
                for(let j = 0; j < numberOfRows; j++){
                    btnId = "btn" + i + "-" + j;
                    tempBtn = document.getElementById(btnId);

                    if(tempBtn.getAttribute("isVisible") == "false" && PARAGRAPH_COUNTER < WORDS.length) {
                        foundInvisible = true;
                        break;
                    }
                }
                if(foundInvisible)
                    break;
            }
        }
        else
            foundInvisible = true;

        if(tempBtn.getAttribute("isVisible") == "true" && visibleCount == (numberOfColumns * numberOfRows)){
            stopGame();
            alert("You have lost.");
        }
        else{

            tempBtn.innerHTML = ''; // Clear any existing content
            let word = getWordAtIndex(typingTestParagraphs[selectedParagraph], PARAGRAPH_COUNTER)

            if(word){
                // Create a span for each letter and add it to the container
                word.split('').forEach(letter => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.classList.add('letter');
                    tempBtn.appendChild(span);
                });

                tempBtn.setAttribute("value", word);
                tempBtn.setAttribute("isVisible", "true");
                tempBtn.style.opacity = 1;
                tempBtn.classList.add("visible");
                

                PARAGRAPH_COUNTER++;
                console.log("selectedParagraph = " + WORDS.length + ", PARAGRAPH_COUNTER = " + PARAGRAPH_COUNTER);
            }
        }

    }

    updateVisibleCount();

    if(helperIsSelected && !helperHighlited){
        let btnId = "";
        let tempBtn = null;
        let foundHelper = false;
        
        for(let i = 0; i < numberOfColumns; i++){
            for(let j = 0; j < numberOfRows; j++){
                btnId = "btn" + i + "-" + j;
                tempBtn = document.getElementById(btnId);

                if(HELPER_COUNTER < WORDS.length && tempBtn.getAttribute("value").toLowerCase() == WORDS[HELPER_COUNTER].toLowerCase()){
                    foundHelper = true;
                    helperHighlited = true;
                    tempBtn.classList.add("gameBtnHighlight");
                    HELPER_COUNTER++;
                    break;
                }
            }
            if(foundHelper)
                break;
        }
        if( visibleCount > 0 && !foundHelper)
            HELPER_COUNTER++;
    }

    // Verify win condition
    if(!foundInvisible && visibleCount <= 0 && WORDS.length == PARAGRAPH_COUNTER)
        winGame();

}

function startGame(){
    timerId = setInterval(engine, timerInterval);
}

function stopGame(){
    clearInterval(timerId);
}

function winGame(){
    stopGame();
    alert("You have won");
}

// Function to get the word at a specific index
function getWordAtIndex(paragraph, index) {
    // Split the paragraph into words using a regular expression to handle punctuation
    const words = paragraph.split(/\s+/).filter(word => word.length > 0);

    // Access the word at the specified index
    return WORDS[index] || null; // Handle cases where index is out of bounds
}

function handleKeyDown(event) {
    // `event` contains information about the keyboard event
    console.log('Key pressed:', event.keyCode); // Logs the key pressed
    console.log(visibleCount);

    if(event.keyCode != 32){
        let btnId = "";

        for(let i = 0; i < numberOfColumns; i++){
            for(let j = 0; j < numberOfRows; j++){
                btnId = "btn" + i + "-" + j;
                let querySelector = "#"+btnId + " .letter";

                let tempBtn = document.getElementById(btnId);
                const letter = event.key.toLowerCase(); // Convert to lowercase for comparison
                const letters = document.querySelectorAll(querySelector);

                // Loop through each letter and highlight if it matches the pressed key
                for(let k = 0; k < letters.length; k++){
                    if (letters[k].textContent.toLowerCase() === letter && k == 0){
                        letters[k].classList.add('highlight');
                    }
                    else if (k > 0 && letters[k].textContent.toLowerCase() === letter && letters[k-1].classList.contains('highlight'))
                        letters[k].classList.add('highlight');
                }

                const allHighlighted = Array.from(letters).every(span => span.classList.contains('highlight'));

                if (letters.length > 0 && tempBtn.getAttribute("isVisible") == "true" && allHighlighted && visibleCount > 0) { // Condition to eliminate word block
                    console.log('All letters have been highlighted.');

                    tempBtn.innerHTML = ''; // Clear any existing content
                    tempBtn.setAttribute("isVisible", "false");
                    tempBtn.setAttribute("value", "");
                    tempBtn.classList.remove("visible");
                    tempBtn.style.opacity = 0;

                    if(tempBtn.classList.contains("gameBtnHighlight")){
                        tempBtn.classList.remove("gameBtnHighlight");
                        helperHighlited = false;
                    }
                }
            }
        }
    }
}

function updateVisibleCount(){
    visibleCount = 0;
    for(let i = 0; i < numberOfColumns; i++){
        for(let j = 0; j < numberOfRows; j++){
            let btnId = "btn" + i + "-" + j;
            let tempBtn = document.getElementById(btnId);

            if(tempBtn.getAttribute("isVisible") == "true")
                visibleCount++;
        }
    }
}

function getRandomIntegerInclusive(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Generate a random integer between 0 and 3 (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add event listener for 'keydown' events on the document
document.addEventListener('keydown', handleKeyDown);

setup();
stopGame();
//initializeGame();