// Define arrays for different parts of the excuse
const subjects = [
    "my pet rock",
    "my goldfish",
    "my houseplant",
    "the neighbor's cat",
    "a very important meeting with my shoelaces",
    "the annual migration of my socks",
    "a critical appointment with my coffee mug",
    "my secret society of dust bunnies",
    "the complex negotiations with my thermostat",
    "a mandatory training session for my left elbow"
];

const actions = [
    "is training for the Olympics",
    "is competing in the World Series of Napping",
    "is learning advanced calculus",
    "has contracted a rare case of existential dread",
    "is undergoing a complex personality upgrade",
    "is stuck in an infinite loop of sneezing",
    "is mediating a conflict between the salt and pepper shakers",
    "is writing the Great American Novel (about pasta)",
    "is practicing interpretive dance moves for the moon",
    "is trying to decode the secret language of houseplants"
];

const reasons = [
    "and I must attend",
    "so I cannot possibly be anywhere else",
    "which requires my immediate attention",
    "due to an urgent inter-species communication event",
    "as part of a government-mandated relaxation period",
    "because the Wi-Fi password changed to something unpronounceable",
    "following a decree from the Council of Socks",
    "during the critical phase of the Great Sock Migration",
    "while my other half goes on a solo vacation",
    "and I am contractually obligated to chaperone"
];

// Function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to generate a random excuse
function generateExcuse() {
    const subject = getRandomElement(subjects);
    const action = getRandomElement(actions);
    const reason = getRandomElement(reasons);

    return `I can't attend because ${subject} ${action} ${reason}.`;
}

// Function to "debunk" an excuse (cursedly)
function debunkExcuse(currentExcuse) {
    // Introduce "broken logic" - maybe it just generates a new excuse instead
    // Or maybe it just adds a random factoid
    // Or maybe it just repeats the original excuse loudly
    const randomChoice = Math.floor(Math.random() * 3); // 0, 1, or 2

    if (randomChoice === 0) {
        return "DEBUNKED! (Actually, here's another excuse: " + generateExcuse() + ")";
    } else if (randomChoice === 1) {
        return currentExcuse + " FACT: This excuse is 100% scientifically valid!";
    } else { // randomChoice === 2
        return currentExcuse.toUpperCase() + " <-- DEBUNKED (BY SHOUTING)";
    }
}

// Get the buttons and display element
const generateBtn = document.getElementById('generateBtn');
const generateBtn2 = document.getElementById('generateBtn2'); // Alt button
const debunkBtn = document.getElementById('debunkBtn');
const excuseDisplay = document.getElementById('excuseDisplay');

// Add event listener to the primary Generate button
generateBtn.addEventListener('click', () => {
    const excuse = generateExcuse();
    excuseDisplay.textContent = excuse;
});

// Add event listener to the conflicting Alt Generate button
generateBtn2.addEventListener('click', () => {
    // The "Alt" button does something different - maybe "debunks" the current excuse
    // Or maybe it just generates a new one in a different format
    // Or maybe it just makes the text bigger
    const currentExcuse = excuseDisplay.textContent;
    if (currentExcuse) {
        excuseDisplay.textContent = "ALTERNATE REALITY: " + currentExcuse;
        excuseDisplay.style.fontSize = (parseFloat(getComputedStyle(excuseDisplay).fontSize) + 2) + 'px'; // Make text bigger
    } else {
        excuseDisplay.textContent = generateExcuse(); // Fallback if no excuse exists
    }
});

// Add event listener to the Debunk button
debunkBtn.addEventListener('click', () => {
    const currentExcuse = excuseDisplay.textContent;
    if (currentExcuse) {
        const debunked = debunkExcuse(currentExcuse);
        excuseDisplay.textContent = debunked;
    } else {
        excuseDisplay.textContent = "Nothing to debunk! Generate an excuse first!"; // Fallback if no excuse exists
    }
});