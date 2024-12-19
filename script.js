// Get the DOM elements
const counterElement = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");

// Initialize click count
let clickCount = 0;

// Add click event listener to the button
clickButton.addEventListener("click", () => {
  // Increment click count
  clickCount++;
  
  // Update the displayed click count
  counterElement.textContent = clickCount;
});
