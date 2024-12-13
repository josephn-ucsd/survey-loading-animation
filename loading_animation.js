if (statusText) {
  statusText.textContent = "ANALYSIS COMPLETE!";
} else {
  console.error("Element with id 'status-text' not found.");
}

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const completed = document.getElementById("completed");
  const statusText = document.getElementById("status-text");
  const dots = document.querySelector(".dots");

  // Set the duration to match the animation time
  const animationDuration = 3000; // 3 seconds

  // Transition from loading to completed
  setTimeout(() => {
    // Hide the loader and display the completed message
    loader.style.display = "none";
    completed.style.display = "block";
  }, animationDuration);
});
