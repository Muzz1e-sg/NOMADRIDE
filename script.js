const items = document.querySelectorAll(
  ".float-card1, .float-card2, .float-card3, .marsh-card1, .marsh-card2, .marsh-card3, .prices-card1, .prices-card2, .prices-card3"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.2
});

items.forEach(item => observer.observe(item));