let slideIndex = 1;
showSlides(slideIndex);

// Automatically switch slides every 5 seconds (5000 milliseconds)
let slideTimer = setInterval(() => {
    nextSlide();
}, 5000);

// Function to control the current slide based on the dot clicked
function currentSlide(n) {
    showSlides(slideIndex = n);

    // Reset the timer when the user manually changes the slide
    resetTimer();
}

// Function to show the next slide
function nextSlide() {
    showSlides(slideIndex += 1);
}

// Function to display the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // If the current slide index is out of bounds, reset it
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // Hide all slides and remove the "active" class from all dots
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the selected slide and highlight the corresponding dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Function to reset the timer when user interacts with the dots
function resetTimer() {
    clearInterval(slideTimer);  // Clear the existing timer
    slideTimer = setInterval(() => {
        nextSlide();
    }, 5000);  // Restart the timer
}