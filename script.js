var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // show 3 cards at once
  spaceBetween: 30,
  loop: true, // infinite loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },   // mobile
    768: { slidesPerView: 2 },   // tablet
    1024: { slidesPerView: 3 },  // desktop
  },
});

//Typerwriter effect
const text = "“Alone we can do so little; together we can do so much.”";
let index = 0;
let isDeleting = false;
const speed = 100;       // typing speed
const eraseSpeed = 50;   // erasing speed
const delay = 1500;      // delay before erasing starts

function typeWriter() {
  const element = document.getElementById("typewriter");

  if (!isDeleting && index < text.length) {
    // Typing
    element.innerHTML = text.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && index > 0) {
    // Deleting
    element.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(typeWriter, eraseSpeed);
  } else if (!isDeleting && index === text.length) {
    // Pause before deleting
    isDeleting = true;
    setTimeout(typeWriter, delay);
  } else if (isDeleting && index === 0) {
    // Start typing again
    isDeleting = false;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

