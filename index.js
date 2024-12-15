// Set up the DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    // Target the paragraph element with id="text"
    const paragraph = document.getElementById("text");
    
    // Replace the text content of the paragraph element
    paragraph.textContent = "This is really cool!";
  });
  
  // A console.log() outside the event listener to illustrate execution order
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  