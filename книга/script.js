// DOM Elements
const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const book = document.querySelector("#book");
const papers = document.querySelectorAll(".paper");
const pageIndicator = document.createElement('div');
const pageFlipSound = document.getElementById("page-flip-sound");
const commentInput = document.getElementById('comment-input');
const submitCommentButton = document.getElementById('submit-comment');
const commentsList = document.getElementById('comments-list');
pageIndicator.className = 'page-indicator';
book.appendChild(pageIndicator);

// State Variables
let currentLocation = 1;
const numOfPapers = papers.length;
const maxLocation = numOfPapers + 1; // Includes the book close state

function updatePageIndicator() {
    pageIndicator.innerText = `Страница ${currentLocation} из ${numOfPapers}`;
}

// Functions
function openBook() {
    book.style.transform = "translateX(50%)";
    updatePageIndicator();
}

function closeBook(isAtBeginning) {
    book.style.transform = isAtBeginning ? "translateX(0%)" : "translateX(100%)";
    updatePageIndicator();
}

function updatePageFlipping(pageIndex, addFlipped, zIndex) {
    if (pageIndex >= 0 && pageIndex < numOfPapers) {
        papers[pageIndex].classList.toggle("flipped", addFlipped);
        papers[pageIndex].style.zIndex = zIndex;
    }
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        if (currentLocation === 1) openBook();
        
        updatePageFlipping(currentLocation - 1, true, currentLocation);
        
        if (currentLocation === numOfPapers) closeBook(false); // Last page flip triggers book close
        currentLocation++;
        pageFlipSound.play(); // Play sound on page flip
        updatePageIndicator();
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        currentLocation--;

        if (currentLocation === 1) closeBook(true); // Close book when back at start
        updatePageFlipping(currentLocation - 1, false, maxLocation - currentLocation);

        if (currentLocation > 1) updatePageFlipping(currentLocation - 2, true, maxLocation - currentLocation + 1);
        pageFlipSound.play(); // Play sound on page flip
        updatePageIndicator();
    }
}

// Event Listeners
prevBtns.forEach(btn => btn.addEventListener("click", goPrevPage));
nextBtns.forEach(btn => btn.addEventListener("click", goNextPage));

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goNextPage();
    if (e.key === 'ArrowLeft') goPrevPage();
});
// script.js

document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    }
});

// Function to handle comment submission
function submitComment() {
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerText = commentText;
        commentsList.appendChild(commentDiv);
        commentInput.value = ''; // Очистка текстовой области
    } else {
        alert('Пожалуйста, введите комментарий.'); // Предупреждение, если текст пустой
    }
}

// Event Listener for submit button
submitCommentButton.addEventListener('click', submitComment);
