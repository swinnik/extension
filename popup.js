// popup.js

// Initialize counter variable
let counter = 0;


document.addEventListener('DOMContentLoaded', function() {
    const incrementButton = document.getElementById('increment');
    const resetButton = document.getElementById('resetButton');
    // Set up the click event listener
    incrementButton.addEventListener('click', function() {
    counter++;
        document.getElementById('title').textContent = "Button Clicked!";
        document.getElementById('description').textContent = `You've clicked the button ${counter} times.`;
    });

    resetButton.addEventListener('click', function() {
        counter = 0;
        document.getElementById('title').textContent = "Counter Reset!";
        document.getElementById('description').textContent = `Counter has been reset to ${counter}.`;
    });
});
