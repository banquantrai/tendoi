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

const termElement = document.getElementById('term');
const meaningElement = document.getElementById('meaning');
const imageElement = document.createElement('img'); // Create image dynamically
imageElement.id = 'image';
meaningElement.prepend(imageElement); // Add image to the back side dynamically
const flipButton = document.getElementById('flip-button');
const nextButton = document.getElementById('next-button'); // Get the Next Card button

function showCard() {
    const currentCard = flashcards[currentCardIndex];
    termElement.textContent = currentCard.term;
    imageElement.src = currentCard.image; // Update image source
    imageElement.alt = `Image for ${currentCard.term}`; // Update image alt text
    meaningElement.querySelector('p').textContent = ''; // Clear meaning text for initial state
}

function flipCard() {
    const flashcardElement = document.getElementById('flashcard');
    if (!flashcardElement) {
        console.error('Flashcard element not found!');
        return;
    }
    flashcardElement.classList.toggle('flipped'); // Toggle the flipped class for animation
    const currentCard = flashcards[currentCardIndex];
    const meaningText = meaningElement.querySelector('p');
    if (flashcardElement.classList.contains('flipped')) {
        meaningText.textContent = currentCard.meaning; // Show meaning when flipped
    } else {
        meaningText.textContent = ''; // Clear meaning when flipped back
    }
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length; // Cycle through flashcards
    showCard(); // Update the flashcard display
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