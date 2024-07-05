const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

// demo
let activeSlide = 0;
setInterval(() => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translate(${(i - activeSlide) * 100}%, -${
      i * 100
    }%)`;
  });
  activeSlide++;
  activeSlide %= slides.length;
  console.log(activeSlide);
}, 5000);
