// popup.js

// Initialize counter variable
let counter = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myButton').addEventListener('click', function() {
        counter++;

        // Update the displayed messages
        document.getElementById('title').textContent = "Button Clicked!";
        document.getElementById('description').textContent = `You've clicked the button ${counter} times.`;
    });
});
