const heroTitle = document.querySelector('.hero-title');
const words = heroTitle.innerText.split(' ');

heroTitle.innerHTML = '';

words.forEach((word, index) => {
  const span = document.createElement('span');
  span.textContent = word + ' ';
  span.style.animationDelay = `${index * 0.5}s`;
  heroTitle.appendChild(span);
});

const aboutSection = document.querySelector('.about-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(aboutSection);

const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        serviceCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('show');
          }, index * 150);
        });
      }
    });
  },
  { threshold: 0.2 }
);

serviceCards.forEach(card => serviceObserver.observe(card));