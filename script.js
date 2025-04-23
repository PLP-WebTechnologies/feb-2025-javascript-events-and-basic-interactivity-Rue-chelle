const $ = (selector) => document.querySelector(selector);
const ctaButton = $("#ctaButton");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// CTA Button Click
ctaButton.addEventListener("click", () => {
  ctaButton.textContent = "Let's Get Moving!";
  ctaButton.style.backgroundColor = "whit";
});

// Tabs Switching
tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active-tab"));
    tabContents.forEach((tab) => tab.classList.remove("active"));
    btn.classList.add("active-tab");
    $(`#tab${index + 1}`).classList.add("active");
  });
});

// Get the main image and thumbnails
const mainImage = document.getElementById("mainImg");
const thumbnails = document.querySelectorAll(".thumb");

// Function to update main image
function updateMainImage(imageSrc) {
  mainImage.src = imageSrc;
}

// Add click event to each thumbnail
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    updateMainImage(thumb.src); // Update main image source with clicked thumbnail source
  });
});

// Form Validation
$("#signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = $("#email").value;
  const password = $("#password").value;
  const feedback = $("#formFeedback");

  if (!email.includes("@") || !email.includes(".")) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thanks for joining FitLife!";
    feedback.style.color = "green";
    this.reset();
  }
});
