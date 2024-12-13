document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const dots = document.querySelector(".dots");
  const statusText = document.getElementById("status-text");

  // Set the duration to match the animation time
  const animationDuration = 3000; // 3 seconds

  // Transition from loading to completed
  setTimeout(() => {
    // Update status text
    statusText.textContent = "ANALYSIS COMPLETE!";
    
    // Replace dots with a green circle and check mark
    dots.innerHTML = ''; // Clear dots
    const greenCircle = document.createElement("div");
    greenCircle.classList.add("green-circle");
    dots.appendChild(greenCircle);
  }, animationDuration);
});
