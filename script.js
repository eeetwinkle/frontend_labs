const greetingElement = document.getElementById('greeting');
const changeButton = document.getElementById('changeGreeting');

const texts = [
    "Hello, World!",
    "Hello, FEFU!"
];

let currentIndex = 1;

function changeGreeting() {
    greetingElement.textContent = texts[currentIndex];

    currentIndex = currentIndex + 1;

    if (currentIndex >= texts.length) {
        currentIndex = 0;
    }
}

changeButton.addEventListener('click', changeGreeting);