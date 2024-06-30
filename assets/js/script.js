const textElement = document.querySelector(".title-text");
const texts = ["Thaksin", "Minee"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    textElement.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex <= currentText.length) {
      setTimeout(typeText, 100);
      return;
    } else {
      isDeleting = true;
      setTimeout(typeText, 5000); // Pause for 5 seconds after typing
      return;
    }
  } else {
    textElement.textContent = currentText.slice(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Switch to the next text
      setTimeout(typeText, 150); // Start typing the next text immediately
      return;
    }
  }

  setTimeout(typeText, 50); // Faster deleting speed
}

typeText();