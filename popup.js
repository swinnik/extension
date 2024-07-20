// popup.js


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myButton').addEventListener('click', function() {
        document.getElementById('title').textContent = "Button Clicked!";
        document.getElementById('description').textContent = "You have clicked the button.";
    });
});
