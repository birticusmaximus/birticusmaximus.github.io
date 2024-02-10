// Home button 
document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']; // Rainbow colors
    let currentColorIndex = 0;

    function changeColor() {
        homeButton.style.backgroundColor = colors[currentColorIndex];
        // Cycle through the color array
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Change color every 2 seconds to match the CSS transition timing
    setInterval(changeColor, 1000); // Match this timing with the CSS transition duration for a seamless effect
});
