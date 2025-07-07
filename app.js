// This file contains the JavaScript logic for the flashcard game.

const flashcards = [
    {
        term: "DI THI",
        meaning: "Chánh kiến",
        image: "images/chanh_kien.png"
    },
    {
        term: "SAN KA",
        meaning: "Chánh tư duy",
        image: "images/chanh_tu_duy.png"
    },
    {
        term: "VA CA",
        meaning: "Chánh ngữ",
        image: "images/chanh_ngu.png"
    },
    {
        term: "KAM TA",
        meaning: "Chánh nghiệp",
        image: "images/chanh_nghiep.png"
    },
    {
        term: "JI VA",
        meaning: "Chánh mạng",
        image: "images/chanh_mang.png"
    },
    {
        term: "VA YA",
        meaning: "Chánh tinh tấn",
        image: "images/chanh_tinh_tan.png"
    },
    {
        term: "SA TI",
        meaning: "Chánh niệm",
        image: "images/chanh_niem.png"
    },
    {
        term: "WA DI",
        meaning: "Chánh định",
        image: "images/chanh_dinh.png"
    }
];

let currentCardIndex = 0;

// Get elements
const termElement = document.querySelector('.term-text');
const meaningElement = document.querySelector('.meaning-text');
const imageElement = document.getElementById('image');
const flipButton = document.getElementById('flip-button');
const nextButton = document.getElementById('next-button');
const progressFill = document.getElementById('progress-fill');
const currentCardSpan = document.getElementById('current-card');
const totalCardsSpan = document.getElementById('total-cards');

// Set total cards
totalCardsSpan.textContent = flashcards.length;

function updateProgress() {
    const progressPercent = ((currentCardIndex + 1) / flashcards.length) * 100;
    progressFill.style.width = progressPercent + '%';
    currentCardSpan.textContent = currentCardIndex + 1;
}

function showCard() {
    const currentCard = flashcards[currentCardIndex];
    termElement.textContent = currentCard.term;
    imageElement.src = currentCard.image;
    imageElement.alt = `Hình ảnh cho ${currentCard.term}`;
    meaningElement.textContent = '';
    updateProgress();
}

function flipCard() {
    const flashcardElement = document.getElementById('flashcard');
    if (!flashcardElement) {
        console.error('Flashcard element not found!');
        return;
    }
    flashcardElement.classList.toggle('flipped');
    const currentCard = flashcards[currentCardIndex];
    if (flashcardElement.classList.contains('flipped')) {
        meaningElement.textContent = currentCard.meaning;
    } else {
        meaningElement.textContent = '';
    }
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    
    // Reset flip state
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.remove('flipped');
    
    showCard();
}

function verifyImages() {
    flashcards.forEach(card => {
        const img = new Image();
        img.src = card.image;
        img.onload = () => console.log(`Image loaded: ${card.image}`);
        img.onerror = () => console.error(`Image not found: ${card.image}`);
    });
}

// Call verifyImages to check the images folder
verifyImages();

if (flipButton) {
    flipButton.addEventListener('click', flipCard); // Attach flip functionality
} else {
    console.error('Flip button not found!');
}

if (nextButton) {
    nextButton.addEventListener('click', nextCard); // Attach next card functionality
} else {
    console.error('Next button not found!');
}

showCard(); // Initial display of the first card