// test.js

// Function to generate a random paragraph of text
function generateRandomText() {
    const sentences = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];
    let paragraph = '';
    for (let i = 0; i < 3; i++) { // Change the number to generate more or fewer sentences
        const sentence = sentences[Math.floor(Math.random() * sentences.length)];
        paragraph += sentence + ' ';
    }
    return paragraph.trim();
}

// Function to add a paragraph of random text to the container
function addRandomParagraph() {
    // Select the container
    const container = document.querySelector('#blogs .container');
    
    // Create a new paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = generateRandomText();
    
    // Append the paragraph to the container
    container.appendChild(paragraph);
}

// Add the paragraph when the DOM content is loaded
document.addEventListener('DOMContentLoaded', addRandomParagraph);
