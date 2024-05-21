// Get the display screen elements
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

// Add event listeners to calculator buttons
const buttons = document.querySelectorAll('.buttons-grid button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Handle button click logic here
        // Update the display screens accordingly
    });
});

// Example: When the user clicks the "=" button
function calculate() {
    // Get the current operation from the screen
    const currentOperation = currentOperationScreen.innerText;
    // Perform the calculation (e.g., eval(currentOperation))
    // Update the screens with the result
}
