const hamburgerMenu = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
const sections = document.querySelectorAll(".section__container");

// Hamburger menu
hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (nav.classList.contains("menu")) {
    nav.classList.remove("menu");
    hamburgerMenu.innerHTML = '<i class="ri-menu-4-fill"></i>';
  } else {
    nav.classList.add("menu");
    hamburgerMenu.innerHTML = '<i class="ri-close-fill"></i>';
  }
});

//
const sectionsToObserve = Array.from(sections).slice(0, -1);

const obsCallback = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
    console.log(entry);
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
};

const sectionObserver = new IntersectionObserver(obsCallback, obsOptions);
sectionsToObserve.forEach((section) => {
  // Hide sections
  section.classList.add("section--hidden");
  // Observe sections
  sectionObserver.observe(section);

  // Manually trigger the observer on load for sections already in view
  if (section.getBoundingClientRect().top < window.innerHeight) {
    section.classList.remove("section--hidden");
    sectionObserver.unobserve(section);
  }
});
