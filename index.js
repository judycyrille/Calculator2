// CALCULATOR program
const display = document.getElementById("display");
const operatorBtn = document.querySelector('.operator-btn');

document.body.style.backgroundColor = gray; // Change "gray" to your desired color
// document.body.style.backgroundColor = "lightgreen";
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay() {
    display.value = "";

}
function del() {
      // Get the current value from the input field
     let currentValue = display.value;
      // Remove the last character
        currentValue = currentValue.slice(0, -1);
     // Update the input field with the modified value
        display.value = currentValue;
    }

    function formatNumber() {
        try {
           const parsedValue = display.value;
            if (isNaN(parsedValue)) {
                throw new Error('Invalid input');
            }
            display.value = (Math.round(parsedValue * 100) / 100).toFixed(2);
        } catch (error) {
            console.error('Error occurred:', error);
            display.value = 'Error';
        }
    }

function calculate() {
    try{
        display.value = eval(display.value);
    }
catch(error) {
    display.value= "Error";
}
}
function changeBackground(color) {
    document.body.style.background.value = color;
}

function setHoverBackgroundColor() {
  //  const operatorBtn = document.querySelector('.operator-btn');
    operatorBtn.addEventListener('mouseover', function() {
        operatorBtn.style.backgroundColor = 'hsl(160, 100%, 45%)';
    });

      operatorBtn.addEventListener('mouseout', function() {
        // Reset the background color when the mouse is no longer hovering
        operatorBtn.style.backgroundColor = 'linear-gradient(to bottom, hsl(0, 0%, 60%), hsl(0, 0%, 70%))'; // You can set it to any default color you prefer
    });
}
