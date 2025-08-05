document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle with Animation
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

    if (menuToggle.classList.contains('active')) {
      menuToggle.innerHTML = '&times;';
    } else {
      menuToggle.innerHTML = '☰';
    }

    if (navLinks.classList.contains('active')) {
      navItems.forEach((item, index) => {
        item.style.animation = `navLinkFade 0.5s ease forwards ${index * 0.1 + 0.3}s`;
      });
    } else {
      navItems.forEach(item => {
        item.style.animation = '';
      });
    }
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('no-scroll');
      navItems.forEach(i => i.style.animation = '');
    });
  });

  // Video play/pause functionality
  const video = document.getElementById('productVideo');
  const playPauseBtn = document.getElementById('playPauseBtn');

  if (video && playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        playPauseBtn.classList.add('hidden');
      } else {
        video.pause();
        playPauseBtn.classList.remove('hidden');
      }
    });

    video.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        playPauseBtn.classList.add('hidden');
      } else {
        video.pause();
        playPauseBtn.classList.remove('hidden');
      }
    });
  }

  // Testimonial slider functionality
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active-dot'));

    testimonials[index].classList.add('active');
    dots[index].classList.add('active-dot');
    currentTestimonial = index;
  }

  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showTestimonial(index));
    });

    // Auto-rotate testimonials
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }

  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const closeBtn = document.querySelector('.close-btn');

  if (contactForm && successModal && closeBtn) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      successModal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
      successModal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
      if (e.target === successModal) {
        successModal.style.display = 'none';
      }
    });
  }
});