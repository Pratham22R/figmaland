const video = document.getElementById("productVideo");
const playPauseBtn = document.getElementById("playPauseBtn");

const togglePlay = () => {
  if (video.paused) {
    video.play();
    playPauseBtn.classList.add("hidden");
  } else {
    video.pause();
    playPauseBtn.classList.remove("hidden");
  }
};

playPauseBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);



const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let interval = setInterval(showNextTestimonial, 5000);

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
    dots[i].classList.toggle('active-dot', i === index);
  });
  currentIndex = index;
}

function showNextTestimonial() {
  let nextIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(nextIndex);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(interval); 
    showTestimonial(i);
    interval = setInterval(showNextTestimonial, 5000); 
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");
  const closeBtn = document.querySelector(".close-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    modal.style.display = "flex";
    document.body.classList.add("modal-open");

    form.reset();
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});
