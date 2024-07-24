const hamburgerMenu = document.querySelector(".nav__menu");
const header = document.querySelector(".header");
const firstSectionInAllPages = document.querySelector(".js-first-section");
const nav = document.querySelector(".nav");
const sectionsToObserve = document.querySelectorAll(".section--animate");

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

// sticky nav
const addHeaderAnimation = function () {
  const obsCallback = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
  };

  const obsOptions = {
    root: null,
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver(obsCallback, obsOptions);
  sectionObserver.observe(firstSectionInAllPages);
};
addHeaderAnimation();

// Animate sections upon first scroll
const addSectionsAnimation = function () {
  const obsCallback = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
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
};
addSectionsAnimation();
